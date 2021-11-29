import { Reply } from '../types/replies'

export const FETCH_MY_REPLIES_SUCCESS = 'replies/FETCH_MY_REPLIES_SUCCESS'
export const FETCH_REPLIES_ERROR = 'replies/FETCH_REPLIES_ERROR'
export const FETCH_MY_REPLIES = 'replies/FETCH_MY_REPLIES'
export const FETCH_TOTAL_REPLIES_COUNT = 'replies/FETCH_TOTAL_REPLIES_COUNT'
export const ADD_NEW_REPLY_SUCCESS = 'replies/ADD_NEW_REPLY_SUCCESS'
export const ADD_NEW_REPLY_ERROR = 'replies/ADD_NEW_REPLY_ERROR'
export const ADD_NEW_REPLY = 'replies/ADD_NEW_REPLY'

export const Actions = {
  fetchReplies: () =>
    ({
      type: FETCH_MY_REPLIES,
    } as const),
  fetchRepliesSuccess: (payload: Reply[]) =>
    ({
      type: FETCH_MY_REPLIES_SUCCESS,
      payload,
    } as const),
  fetchTotalRepliesCount: (payload: number) =>
    ({
      type: FETCH_TOTAL_REPLIES_COUNT,
      payload,
    } as const),
  fetchRepliesError: (payload: string) =>
    ({
      type: FETCH_REPLIES_ERROR,
      payload,
    } as const),
    addNewReply: () =>
    ({
      type: ADD_NEW_REPLY,
    } as const),
    addNewReplySuccess: (payload: Reply) =>
    ({
      type: ADD_NEW_REPLY_SUCCESS,
      payload,
    } as const),
    addNewReplyError: (payload: string) =>
    ({
      type: ADD_NEW_REPLY_ERROR,
      payload,
    } as const),
}
