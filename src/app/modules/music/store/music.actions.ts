import { Action } from "@ngrx/store";
import { SearchResult } from "../../../shared/models/search-result";
import {Album} from "../../../shared/models/items";
import {ResponseMessage} from "../../../shared/models/response-message";

export const START_SEARCH = '[Music] Start Search';
export const SEARCH_FAIL = '[Music] Search Fail';
export const SET_SEARCH_RESULT = '[Music] Set Search Result';
export const CLEAR_SEARCH_RESULT = '[Music] Clear Search Result';
export const START_ALBUM_SEARCH = '[Music] Start Album Search';
export const SET_ALBUM = '[Music] Set Album';

export class StartSearch implements Action {
  readonly type = START_SEARCH;
  constructor (public payload: string) {}
}

export class SearchFail implements Action {
  readonly type = SEARCH_FAIL;
  constructor (public payload: ResponseMessage) {}
}

export class SetSearchResult implements Action {
  readonly type = SET_SEARCH_RESULT;
  constructor (public payload: SearchResult) {}
}

export class ClearSearchResult implements Action {
  readonly type = CLEAR_SEARCH_RESULT;
}

export class StartAlbumSearch implements Action {
  readonly type = START_ALBUM_SEARCH;
  constructor(public payload: string) {}
}

export class SetAlbum implements Action {
  readonly type = SET_ALBUM;
  constructor(public payload: Album) {}
}

export type MusicActions =
  | StartSearch
  | SearchFail
  | SetSearchResult
  | ClearSearchResult
  | StartAlbumSearch
  | SetAlbum;
