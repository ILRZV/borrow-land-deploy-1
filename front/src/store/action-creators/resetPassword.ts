import { ResetPasswordState } from '../types/resetPassword'

export const SET_USER_PASSWORD = 'reset/SET_USERS_DATA'
export const SET_USER_PASSWORD_ERROR = 'reset/SET_USERS_ERROR_DATA'

export const Actions = {
  setUserPassword: (data: ResetPasswordState) =>
    ({
      type: SET_USER_PASSWORD,
      data: data,
    } as const),
  setUserPasswordError: (message: string) =>
    ({
      type: SET_USER_PASSWORD_ERROR,
      data: { message },
    } as const),
}
