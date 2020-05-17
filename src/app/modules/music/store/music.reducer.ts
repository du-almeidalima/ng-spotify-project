import * as MusicActions from './music.actions';

export interface MusicState {
  isLoading: boolean,
  albums: any[]
}

const initialState: MusicState = {
  isLoading: false,
  albums: []
}

const musicReducer = (state: MusicState = initialState, action: MusicActions.MusicActions) => {
  switch (action.type) {
    case MusicActions.START_SEARCH:
      return {
        ...state,
        isLoading: true
      }
  }
}

export { musicReducer }
