import { MapAction, MapState } from '../types/map'

const SET_POSITION = 'map/SET_POSITION'

const initialState: MapState = {
  position: [],
}

export const mapReducer = (
  state = initialState,
  action: MapAction
): MapState => {
  switch (action.type) {
    case SET_POSITION:
      return {
        ...state,
        position: action.payload,
      }
    default:
      return state
  }
}
