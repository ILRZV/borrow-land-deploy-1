import { RootState } from '../index'

export const getRequests = (state: RootState) => {
  return state.request
}

export const getRequestById = (requests, requestId) => {
  return requests.find((req) => req.id === +requestId)
}
