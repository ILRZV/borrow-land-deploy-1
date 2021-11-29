import { Action } from 'redux'

export interface MapState {
  position: number[]
}

export interface MapAction extends Action {
  payload: number[]
}
