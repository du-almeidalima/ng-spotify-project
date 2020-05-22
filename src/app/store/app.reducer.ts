import * as fromAuth from '../core/auth/store/auth.reducer';
import * as fromMusic from '../modules/music/store/music.reducer';

/*
 * This file will contain all the Spotify App state structure and the reducers from the features
 */

import {Action, ActionReducerMap} from '@ngrx/store';

// Global State Structure
export interface AppState {
  auth: fromAuth.AuthState;
  music: fromMusic.MusicState;
}

// Global Application Reducers*
export const reducers: ActionReducerMap<any, Action> = {
  auth: fromAuth.authReducer,
  music: fromMusic.musicReducer
};
