import { Request } from './request'

export type Reply = {
  request: Request
  requestId: number
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

export interface RepliesState {
  myReplies: Reply[]
  loading: boolean
  totalCount: number
  error: null | string
}
