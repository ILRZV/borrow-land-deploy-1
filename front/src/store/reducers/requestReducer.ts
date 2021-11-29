import {
  RequestsAction,
  RequestActionTypes,
  RequestState,
} from '../types/request'

const initialState: RequestState = {
  requests: [],
  loading: false,
  error: null,
}

export const requestReducer = (
  state = initialState,
  action: RequestsAction
): RequestState => {
  switch (action.type) {
    case RequestActionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case RequestActionTypes.FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        requests: [...state.requests, action.payload],
      }
    case RequestActionTypes.FETCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case RequestActionTypes.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case RequestActionTypes.ADD_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        requests: [...state.requests, action.payload],
      }
    case RequestActionTypes.ADD_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case RequestActionTypes.SET_REQUESTS:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case RequestActionTypes.SET_REQUESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        requests: action.payload,
      }
    case RequestActionTypes.SET_REQUESTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case RequestActionTypes.SET_ARCHIVATION:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case RequestActionTypes.SET_ARCHIVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        requests: [action.payload],
      }
    case RequestActionTypes.SET_ARCHIVATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
