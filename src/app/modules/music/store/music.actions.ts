import { Action } from "@ngrx/store";
import { SearchResult } from "../../../shared/models/search-result";

export const START_SEARCH = '[Music] Start Search';
export const SET_SEARCH_RESULT = '[Music] Set Search Result';
export const CLEAR_SEARCH_RESULT = '[Music] Clear Search Result';

export class StartSearch implements Action {
  readonly type = START_SEARCH;
  constructor (public payload: string) {}
}

export class SetSearchResult implements Action {
  readonly type = SET_SEARCH_RESULT;
  constructor (public payload: SearchResult) {}
}

export class ClearSearchResult implements Action {
  readonly type = CLEAR_SEARCH_RESULT;
}

export type MusicActions = StartSearch | SetSearchResult | ClearSearchResult;
