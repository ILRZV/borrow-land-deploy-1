import { LoginError, LoginState } from '../types/login'

export const SET_LOGIN_USER = 'auth/SET_USERS_DATA'
export const SET_LOGIN_ERROR_DATA = 'auth/SET_USERS_ERROR_DATA'

export const Actions = {
  setLoginUser: (data: LoginState) =>
    ({
      type: SET_LOGIN_USER,
      data: data,
    } as const),
  setLoginErrorData: (payload: string) =>
    ({
      type: SET_LOGIN_ERROR_DATA,
      payload,
    } as const),
}
