import {Component, OnInit} from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {environment as env} from "../../../environments/environment";
import {AuthenticationResponse} from "../../shared/models/api/authentication-response";
import {ResponseMessage} from "../../shared/models/response-message";
import {MessageSeverity} from "../../shared/models/enums/message-severity";
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  public errorResponse: ResponseMessage = null;

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

    if (this.route.snapshot.queryParams.error) {
      this.handleErrorResponse(this.route.snapshot.queryParams.error);
    }
  }

  public onLoginClick(): void {
    let params = new HttpParams();
    params = params.append('client_id', env.clientId);
    params = params.append('response_type', 'token');
    params = params.append('redirect_uri', env.callback);
    params = params.append('scope', env.scope);
    params = params.append('show_dialog', env.showDialog);

    window.location.href = env.identityProvider + '?' + params.toString();
  }

  private handleResponse(authResponse: AuthenticationResponse) {
    // Success
    if (authResponse.access_token) {
      this.store.dispatch(new AuthActions.FetchUserData(authResponse))
    }
  }

  private handleErrorResponse(error: string) {
    switch (error) {
      case 'access_denied':
        this.errorResponse = {
          severity: MessageSeverity.ERROR,
          message: `Error: The user didn't grant the permissions required`
        }
        break;
    }
  }
}
