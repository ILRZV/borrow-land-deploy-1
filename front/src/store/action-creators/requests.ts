import { Dispatch } from 'redux'
import { RequestsAction, RequestActionTypes, Request } from '../types/request'
import {
  fetchAllRequests,
  getRequest,
  createRequest,
  updateRequest,
  archiveRequest,
} from '../../services/api/requests'
import { RequestForm } from '../../Components/RequestForm/RequestForm'
import {
  ADD_REQUEST_ERROR_MESSAGE,
  FETCH_ERROR_MESSAGE,
  SET_REQUESTS_ERROR_MESSAGE,
  UPDATE_REQUEST_ERROR_MESSAGE,
  SET_ARCHIVATION_ERROR_MESSAGE,
} from './errorMessages'
import { getMappedRequests, RequestBack } from '../../mapping/getMappedRequests'

export const fetchRequest = (requestId: string | number) => {
  return async (dispatch: Dispatch<RequestsAction>) => {
    try {
      dispatch({ type: RequestActionTypes.FETCH_REQUEST })
      const response = await getRequest(requestId)
      dispatch({
        type: RequestActionTypes.FETCH_REQUEST_SUCCESS,
        payload: response.data.request as Request,
      })
    } catch (e) {
      dispatch({
        type: RequestActionTypes.FETCH_REQUEST_ERROR,
        payload: FETCH_ERROR_MESSAGE,
      })
    }
  }
}

export const addRequest = (request: RequestForm) => {
  return async (dispatch: Dispatch<RequestsAction>) => {
    try {
      dispatch({ type: RequestActionTypes.ADD_REQUEST })
      const response = await createRequest(request)
      dispatch({
        type: RequestActionTypes.ADD_REQUEST_SUCCESS,
        payload: {
          ...response.data.request,
          categoryId: response.data.request?.CategoryId,
          locationId: response.data.request?.LocationId,
        } as Request,
      })
      return response
    } catch (e) {
      dispatch({
        type: RequestActionTypes.ADD_REQUEST_ERROR,
        payload: ADD_REQUEST_ERROR_MESSAGE,
      })
      return false
    }
  }
}

export const setRequests = () => {
  return async (dispatch: Dispatch<RequestsAction>) => {
    try {
      dispatch({ type: RequestActionTypes.SET_REQUESTS })
      const response = await fetchAllRequests()
      dispatch({
        type: RequestActionTypes.SET_REQUESTS_SUCCESS,
        payload: getMappedRequests(response.data),
      })
    } catch (e) {
      dispatch({
        type: RequestActionTypes.SET_REQUESTS_ERROR,
        payload: SET_REQUESTS_ERROR_MESSAGE,
      })
    }
  }
}

export const changeRequest = (request: RequestForm, id: string | number) => {
  return async (dispatch: Dispatch<RequestsAction>) => {
    try {
      dispatch({ type: RequestActionTypes.UPDATE_REQUEST })
      const response = await updateRequest(request, id)
      dispatch({
        type: RequestActionTypes.UPDATE_REQUEST_SUCCESS,
        payload: {
          ...response.data?.request,
          categoryId: response.data?.request?.CategoryId,
          locationId: response.data?.request?.LocationId,
        } as Request,
      })
      return response
    } catch (e) {
      dispatch({
        type: RequestActionTypes.UPDATE_REQUEST_ERROR,
        payload: UPDATE_REQUEST_ERROR_MESSAGE,
      })
      return false
    }
  }
}

export const archiveUserRequest = (requestId: string | number) => {
  return async (dispatch: Dispatch<RequestsAction>) => {
    try {
      dispatch({ type: RequestActionTypes.SET_ARCHIVATION })
      const response = await archiveRequest(requestId)
      dispatch({
        type: RequestActionTypes.SET_ARCHIVATION_SUCCESS,
        payload: {
          ...response.data.request,
        },
      })
    } catch (e) {
      dispatch({
        type: RequestActionTypes.SET_ARCHIVATION_ERROR,
        payload: SET_ARCHIVATION_ERROR_MESSAGE,
      })
    }
  }
}
