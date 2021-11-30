import axios from 'axios'
import { getToken } from '../localStorage'

const AxiosInstance = axios.create({
  baseURL: 'http://35.157.42.65:5000',
  timeout: 5000,
  responseType: 'json',
})

AxiosInstance.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token.replaceAll(`"`, '')}`,
    }
  }
  return config
})

export default AxiosInstance
