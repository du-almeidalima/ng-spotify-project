import {Action} from "@ngrx/store";
import {AuthenticationResponse} from "../model/api/authentication-response";
import {UserModel} from "../model/user.model";

export const FETCH_USER_DATA = '[Auth] Fetch User Data';
export const AUTHENTICATION_SUCCESS = '[Auth] Authentication Success';
export const LOGOUT = '[Auth] Logout';
export const AUTO_LOGIN = '[Auth] Auto Login';

export class FetchUserData implements Action {
  readonly type = FETCH_USER_DATA;
  constructor (public payload: AuthenticationResponse) {}
}

export class AuthenticationSuccess implements Action {
  readonly type = AUTHENTICATION_SUCCESS;
  constructor (public payload: { user: UserModel, redirect: boolean }) {}
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class LogOut implements Action {
  readonly type = LOGOUT;
}

export type AuthActions = FetchUserData | AuthenticationSuccess | AutoLogin;
