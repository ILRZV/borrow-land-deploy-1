import { resetPassword } from '../../services/api/resetPasswordApi'
import { Dispatch } from 'react'
import { AxiosResponse } from 'axios'
import { ResetPasswordState } from '../types/resetPassword'
import {
  Actions,
  SET_USER_PASSWORD,
  SET_USER_PASSWORD_ERROR,
} from '../action-creators/resetPassword'

const initialState = {
  password: '',
  isReset: false,
}

export const resetPasswordReducer = (
  state = initialState,
  action: ActionsTypes
): ResetPasswordState => {
  switch (action.type) {
    case SET_USER_PASSWORD:
    case SET_USER_PASSWORD_ERROR:
      return {
        ...state,
        ...action.data,
      }

    default:
      return state
  }
}

type InferValueTypes<T> = T extends { [key: string]: infer Data } ? Data : never
type ActionsTypes = ReturnType<InferValueTypes<typeof Actions>>

export const resetPasswordThunk = (password: string) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    resetPassword(password).then((response: AxiosResponse) => {
      if (response.data) {
        const data = {
          password: password,
          isReset: true,
        }
        dispatch(Actions.setUserPassword(data))
      }
      if (!response.resultCode) {
        dispatch(Actions.setUserPasswordError(response.message))
      }
    })
  }
}

export default resetPasswordReducer
