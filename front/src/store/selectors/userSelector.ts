import { RootState } from '../index'

export const getLoggedIn = (state: RootState) => {
  return state.user.loggedIn
}

export const getLoginError = (state: RootState) => {
  return state.user.error
}

export const getLoginErrorMessage = (state: RootState) => {
  return state.user.message
}

export const getUserId = (state: RootState) => {
  return state.user.id
}
