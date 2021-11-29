export enum RequestActionTypes {
  FETCH_REQUEST = 'FETCH_REQUEST',
  FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS',
  FETCH_REQUEST_ERROR = 'FETCH_REQUEST_ERROR',
  ADD_REQUEST = 'ADD_REQUEST',
  ADD_REQUEST_SUCCESS = 'ADD_REQUEST_SUCCESS',
  ADD_REQUEST_ERROR = 'ADD_REQUEST_ERROR',
  SET_REQUESTS = 'SET_REQUESTS',
  SET_REQUESTS_SUCCESS = 'SET_REQUESTS_SUCCESS',
  SET_REQUESTS_ERROR = 'SET_REQUESTS_ERROR',
  UPDATE_REQUEST = 'UPDATE_REQUEST',
  UPDATE_REQUEST_SUCCESS = 'UPDATE_REQUEST_SUCCESS',
  UPDATE_REQUEST_ERROR = 'UPDATE_REQUEST_ERROR',
  SET_ARCHIVATION = 'SET_ARCHIVATION',
  SET_ARCHIVATION_SUCCESS = 'SET_ARCHIVATION_SUCCESS',
  SET_ARCHIVATION_ERROR = 'SET_ARCHIVATION_ERROR',
}

export type Request = {
  id: number
  active: boolean
  name: string
  description: string
  address: string
  startDate: Date
  endDate: Date
  categoryId: number
  locationId: number
  userId: number
  picture?: string
  updatedAt: Date
  createdAt: Date
}

export interface RequestState {
  requests: Request[]
  loading: boolean
  error: null | string
}

export interface FetchRequestAction {
  type: RequestActionTypes.FETCH_REQUEST
}

export interface FetchRequestSuccessAction {
  type: RequestActionTypes.FETCH_REQUEST_SUCCESS
  payload: Request
}

export interface FetchRequestErrorAction {
  type: RequestActionTypes.FETCH_REQUEST_ERROR
  payload: string
}

export interface AddRequestAction {
  type: RequestActionTypes.ADD_REQUEST
}

export interface AddRequestSuccessAction {
  type: RequestActionTypes.ADD_REQUEST_SUCCESS
  payload: Request
}

export interface AddRequestErrorAction {
  type: RequestActionTypes.ADD_REQUEST_ERROR
  payload: string
}

export interface SetRequestsAction {
  type: RequestActionTypes.SET_REQUESTS
}

export interface SetRequestsSuccessAction {
  type: RequestActionTypes.SET_REQUESTS_SUCCESS
  payload: Request[]
}

export interface SetRequestsErrorAction {
  type: RequestActionTypes.SET_REQUESTS_ERROR
  payload: string
}

export interface UpdateRequestAction {
  type: RequestActionTypes.UPDATE_REQUEST
}

export interface UpdateRequestSuccessAction {
  type: RequestActionTypes.UPDATE_REQUEST_SUCCESS
  payload: Request
}

export interface UpdateRequestErrorAction {
  type: RequestActionTypes.UPDATE_REQUEST_ERROR
}

export interface SetArchivationAction {
  type: RequestActionTypes.SET_ARCHIVATION
}

export interface SetArchivationSuccessAction {
  type: RequestActionTypes.SET_ARCHIVATION_SUCCESS
  payload: Request
}

export interface SetArchivationErrorAction {
  type: RequestActionTypes.SET_ARCHIVATION_ERROR
  payload: string
}

export type RequestsAction =
  | FetchRequestAction
  | FetchRequestSuccessAction
  | FetchRequestErrorAction
  | AddRequestAction
  | AddRequestSuccessAction
  | AddRequestErrorAction
  | SetRequestsAction
  | SetRequestsSuccessAction
  | SetRequestsErrorAction
  | UpdateRequestAction
  | UpdateRequestSuccessAction
  | UpdateRequestErrorAction
  | SetArchivationAction
  | SetArchivationSuccessAction
  | SetArchivationErrorAction
