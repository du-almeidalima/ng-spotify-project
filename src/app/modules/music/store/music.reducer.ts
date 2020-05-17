import {Action} from "@ngrx/store";

export interface MusicState {
  isLoading: boolean,
  albums: any[]
}

const initialState: MusicState = {
  isLoading: false,
  albums: []
}

const musicReducer = (state: MusicState, action: Action) => {

}

export { musicReducer }
