import { SearchResult } from "../../../shared/models/search-result";
import * as MusicActions from './music.actions';

export interface MusicState {
  isLoading: boolean;
  searchResult: SearchResult;
}

const initialState: MusicState = {
  isLoading: false,
  searchResult: null
}

const musicReducer = (state: MusicState = initialState, action: MusicActions.MusicActions) => {
  switch (action.type) {

    case MusicActions.START_SEARCH:
      return {
        ...state,
        isLoading: true
      }

    case MusicActions.SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
        isLoading: false
      }

    case MusicActions.CLEAR_SEARCH_RESULT:
      return {
        ...state,
        searchResult: null,
        isLoading: false
      }

    default:
      return state
  }
}

export { musicReducer }
