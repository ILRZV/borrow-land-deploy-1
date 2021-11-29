import AxiosInstance from './AxiosInstance'

export const registerUser = async (
  name: string,
  phone: string,
  email: string,
  password: string
) => {
  try {
    const { data: response } = await AxiosInstance.post('/users', {
      name,
      phone,
      email,
      password,
    })
    return response
  } catch (error) {
    return error?.response?.data
  }
}
