import {Component, OnInit} from '@angular/core';
import {environment as env} from "../../../environments/environment";
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {AuthenticationResponse} from "./model/api/authentication-response";
import {Store} from "@ngrx/store";
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  public isLoading = false;

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.route.fragment.pipe(
      map(fragment => new URLSearchParams(fragment))
    ).subscribe((resp: URLSearchParams) => {
      const authResponse: AuthenticationResponse = {
        access_token: resp.get('access_token'),
        token_type: resp.get('token_type'),
        expires_in: +resp.get('expires_in'),
        state: resp.get('state')
      }

      this.handleResponse(authResponse);
    })
  }

  public onLoginClick(): void {
    let params = new HttpParams();
    params = params.append('client_id', env.clientId);
    params = params.append('response_type', 'token');
    params = params.append('redirect_uri', env.callback);
    params = params.append('scope', env.scope);

    window.location.href = env.identityProvider + '?' + params.toString();
  }

  private handleResponse(authResponse: AuthenticationResponse) {
    // Success
    if (authResponse.access_token) {
      this.store.dispatch(new AuthActions.FetchUserData(authResponse))
    }
  }
}
