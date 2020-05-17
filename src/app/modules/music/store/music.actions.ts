import { Action } from "@ngrx/store";

export const START_SEARCH = '[Music] Start Search';

export class StartSearch implements Action {
  readonly type = START_SEARCH;
  constructor (public payload: string) {}
}

export type MusicActions = StartSearch;
