export interface LoginState {
  email: string
  password: string
  name: string
  phone: string
  token: string
  loggedIn: boolean
  error: boolean
  message?: string
  id: number
}
