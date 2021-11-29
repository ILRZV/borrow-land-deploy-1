import { Reply } from '../store/types/replies'
import { Request } from '../store/types/request'

export type ReplyBack = {
  Request: Request
  RequestId: number
  userId: number
  facebook?: null | string
  telegram?: null | string
  viber?: null | string
  vkontakte?: null | string
  whatsapp?: null | string
  createdAt: Date
  id: number
  text: string
  updatedAt: Date
}

export const getMappedReplies = (replies: ReplyBack[]): Reply[] => {
  return replies.map(({ RequestId, Request, ...item }) => {
    return {
      ...item,
      requestId: RequestId,
      request: Request,
    }
  })
}
