import { SearchResult } from "../../../shared/models/search-result";
import * as MusicActions from './music.actions';

export interface MusicState {
  isLoading: boolean;
  searchResult: SearchResult;
  lastSearch: string;
}

const initialState: MusicState = {
  isLoading: false,
  searchResult: null,
  lastSearch: null
}

const musicReducer = (state: MusicState = initialState, action: MusicActions.MusicActions) => {
  switch (action.type) {

    case MusicActions.START_SEARCH:
      return {
        ...state,
        isLoading: true,
        lastSearch: action.payload
      }

    case MusicActions.SET_SEARCH_RESULT:
      return {
        ...state,
        isLoading: false,
        searchResult: action.payload
      }

    case MusicActions.CLEAR_SEARCH_RESULT:
      return {
        ...state,
        isLoading: false,
        searchResult: null,
        lastSearch: null
      }

    default:
      return state
  }
}

export { musicReducer }
