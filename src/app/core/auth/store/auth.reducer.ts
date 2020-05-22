import { User } from '../../../shared/models/user';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: null
};

export const authReducer = (state: AuthState = initialState, action: AuthActions.AuthActions) => {

  switch (action.type) {
    case AuthActions.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        user: action.payload.user
      };

    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
};
