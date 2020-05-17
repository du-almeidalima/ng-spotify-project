import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Actions, Effect, ofType} from '@ngrx/effects';
import {forkJoin, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";

import {environment as env} from "../../../../environments/environment";
import {UserDataResponse} from "../../../shared/models/api/user-data-response";
import {AuthenticationResponse} from "../../../shared/models/api/authentication-response";
import {User} from "../../../shared/models/user";
import {AuthService} from "../auth.service";
import * as AuthActions from "./auth.actions";


@Injectable()
export class AuthEffects {
  private readonly GET_CURRENT_USER = env.baseUrl + env.getCurrentUser;
  private readonly LS_TOKEN = 'UserToken';

  constructor (
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService) {
  }

  @Effect()
  authFetchUserData = this.actions$.pipe(
    ofType(AuthActions.FETCH_USER_DATA),
    switchMap((authResp: AuthActions.FetchUserData) => {
      const authToken = authResp.payload.token_type + ' ' + authResp.payload.access_token;
      return forkJoin([
        this.http.get(
          this.GET_CURRENT_USER, {
            headers: new HttpHeaders({'Authorization':  authToken})
          }
        ),
        of(authResp.payload)
      ])
    }),
    map((combined: any[]) => {
      const userData: AuthenticationResponse & UserDataResponse  = {...combined[0], ...combined[1]}
      return this.handleAuthenticationSuccess(userData);
    })
  )

  @Effect({dispatch: false})
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.AUTHENTICATION_SUCCESS),
    tap((authAction: AuthActions.AuthActions) => {
      if (authAction instanceof AuthActions.AuthenticationSuccess && authAction.payload.redirect) {
        this.router.navigate(['/music'])
      }
    })
  )

  @Effect()
  autoLogin = this.actions$.pipe(
    ofType(AuthActions.AUTO_LOGIN),
    map(() => {
      const restoredUser  = JSON.parse(localStorage.getItem(this.LS_TOKEN));
      if (restoredUser) {
        const { name, profileImg, tokenType, _token, _tokenExpirationDate } = restoredUser;
        const user = new User(name, profileImg, tokenType, _token, new Date(_tokenExpirationDate))

        // Checking if token has expired
        if (user.token) {
          // Session expiration
          const expiration = ( new Date(_tokenExpirationDate).getTime() - new Date().getTime());
          this.authService.setLogoutTimer(expiration);

          return new AuthActions.AuthenticationSuccess({ user, redirect:false });
        } else {

          console.log(`User token has expired.`);
          return { type: 'NULL' };
        }
      } else {
        console.log(`Couldn't find any user to auto login.`);
        return { type: 'NULL' };
      }
    })
  )

  @Effect({ dispatch: false })
  authLogout = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => {
      localStorage.removeItem(this.LS_TOKEN)
      this.authService.clearLogoutTimer();
      this.router.navigate(['/login'])
    })
  )

  // Handlers

  /**
   * Will take the joined response from Authentication and Current User Details calls and create a user token and store
   * it into the LocalStorage. In the end, will return an action to store user in state.
   *
   * @param userData Join of response from the two http calls
   */
  private handleAuthenticationSuccess(userData: AuthenticationResponse & UserDataResponse): AuthActions.AuthActions{
    const expirationDate = new Date().getTime() + (+userData.expires_in * 1000);
    const {display_name, access_token, token_type, images} = userData
    const user = new User(display_name, images[0].url, token_type, access_token, expirationDate);

    localStorage.setItem(this.LS_TOKEN, JSON.stringify(user));
    return new AuthActions.AuthenticationSuccess({ user, redirect: true});
  }
}
