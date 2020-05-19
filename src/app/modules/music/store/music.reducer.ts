import { SearchResult } from "../../../shared/models/search-result";
import { Album, Item } from "../../../shared/models/items";
import { ResponseMessage } from "../../../shared/models/response-message";
import * as MusicActions from './music.actions';

export interface MusicState {
  isLoading: boolean;
  searchResult: SearchResult;
  lastSearch: string;
  message: ResponseMessage;
  currentItem: Item;
  searchedAlbums: Album[];
}

const initialState: MusicState = {
  isLoading: false,
  searchResult: null,
  lastSearch: null,
  message: null,
  currentItem: null,
  searchedAlbums: []
}

const musicReducer = (state: MusicState = initialState, action: MusicActions.MusicActions) => {
  switch (action.type) {

    case MusicActions.START_SEARCH:
      return {
        ...state,
        isLoading: true,
        lastSearch: action.payload
      }

    case MusicActions.SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        lastSearch: null,
        messages: action.payload
      }

    case MusicActions.SET_SEARCH_RESULT:
      return {
        ...state,
        isLoading: false,
        searchResult: action.payload,
        messages: null
      }

    case MusicActions.CLEAR_SEARCH_RESULT:
      return {
        ...state,
        isLoading: false,
        searchResult: null,
        lastSearch: null
      }

    case MusicActions.START_ALBUM_SEARCH:
      return {
        ...state,
        isLoading: true
      }

    case MusicActions.SET_ALBUM:
      return {
        ...state,
        isLoading: false,
        currentItem: action.payload,
        messages: null
      }

    default:
      return state
  }
}

export { musicReducer }
