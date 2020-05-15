import {Component} from '@angular/core';
import {environment as env} from "../../../environments/environment";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor() {}

  public onLoginClick(): void {
    let params = new HttpParams();
    params = params.append('client_id', env.clientId);
    params = params.append('response_type', 'token');
    params = params.append('redirect_uri', env.callback);
    params = params.append('scope', env.scope);

    window.location.href = env.identityProvider + '?' + params.toString();
  }
}
