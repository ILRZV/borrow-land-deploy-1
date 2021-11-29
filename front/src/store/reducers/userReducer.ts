import { Dispatch } from 'react'
import { LoginState } from '../types/login'
import { setToken } from '../../services/localStorage'
import {
  Actions,
  SET_LOGIN_USER,
  SET_LOGIN_ERROR_DATA,
} from '../action-creators/login'
import { getCurrentUser, loginUser } from '../../services/api/loginRequests'
import { registerUser } from '../../services/api/registrationApi'

const initialState = {
  email: '',
  password: '',
  name: '',
  phone: '',
  token: '',
  loggedIn: false,
  error: false,
  message: '',
  id: null,
}

export const userReducer = (
  state = initialState,
  action: ActionsTypes
): LoginState => {
  switch (action.type) {
    case SET_LOGIN_USER:
      return {
        ...state,
        ...action.data,
      }
    case SET_LOGIN_ERROR_DATA:
      return {
        ...state,
        error: true,
        message: action.payload,
      }
    default:
      return state
  }
}

type InferValueTypes<T> = T extends { [key: string]: infer Data } ? Data : never
type ActionsTypes = ReturnType<InferValueTypes<typeof Actions>>

export const loginThunk = (email: string, password: string) => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    const response = await loginUser(email, password)
    if (response.data) {
      setToken(JSON.stringify(response.data.token))
      const token = response.data.token
      const currentUser = await getCurrentUser()
      const id = currentUser.data.user?.id
      const data = {
        email,
        password,
        token,
        loggedIn: true,
        message: '',
        id,
      }
      dispatch(Actions.setLoginUser(data))
    }
    if (!response.resultCode) {
      dispatch(Actions.setLoginErrorData(response.message))
    }
  }
}

export const registrationThunk = (
  name: string,
  phone: string,
  email: string,
  password: string
) => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    const response = await registerUser(name, phone, email, password)
    if (response.data) {
      setToken(JSON.stringify(response.data.token))
      const token = response.data.token
      const currentUser = await getCurrentUser()
      const id = currentUser.data.user?.id
      const data = {
        name,
        phone,
        email,
        password,
        token,
        loggedIn: true,
        message: '',
        id,
      }
      dispatch(Actions.setLoginUser(data))
    }
    if (!response.resultCode) {
      dispatch(Actions.setLoginErrorData(response.message))
    }
  }
}

export const logOutThunk = () => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    setToken('null')
    dispatch(Actions.setLoginUser(initialState))
  }
}

export default userReducer
