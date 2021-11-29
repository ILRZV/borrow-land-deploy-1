import AxiosInstance from './AxiosInstance'
import { CreateReplies } from '../types'

export const fetchMyReplies = async (page: number, limit: number) => {
  try {
    const response = await AxiosInstance.get('/replies/me', {
      params: { page, limit },
    })
    return response.data
  } catch (e) {
    return e
  }
}

export const createReply = async (
  requestId: string | number,
  reply: CreateReplies
) => {
  try {
    const { data: response } = await AxiosInstance.post(
      `replies/request/:${requestId}`,
      reply
    )
    return response
  } catch (e) {
    return e
  }
}
