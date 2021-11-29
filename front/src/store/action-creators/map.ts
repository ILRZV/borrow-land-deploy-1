import { MapAction } from '../types/map'

const SET_POSITION = 'map/SET_POSITION'

export const setPosition = (position: number[]): MapAction => {
  return {
    type: SET_POSITION,
    payload: position,
  }
}
