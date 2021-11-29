import AxiosInstance from './AxiosInstance'

export const loginUser = async (email: string, password: string) => {
  try {
    const { data: response } = await AxiosInstance.post('/users/login', {
      email,
      password,
    })
    return response
  } catch (error) {
    return error.response.data
  }
}

export const receiveVerificationCode = async (code: string, email: string) => {
  try {
    const { data: response } = await AxiosInstance.post(
      '/users/verificationCode',
      {
        code,
        email,
      }
    )
    return response
  } catch (error) {
    return error.response.data.resultCode
  }
}

export const sendEmail = async (email: string) => {
  try {
    const { data: response }: any = await AxiosInstance.post(
      '/users/verification',
      {
        email,
      }
    )
    return response.resultCode
  } catch (error) {
    return error.response.data.resultCode
  }
}

export const resetPassword = async (password: string) => {
  try {
    const { data: response } = await AxiosInstance.put('/users/password', {
      password,
    })
    return response
  } catch (error) {
    return error.response.data
  }
}

export const getCurrentUser = async () => {
  const { data: response } = await AxiosInstance.get('/users/me')
  return response
}

export default AxiosInstance
