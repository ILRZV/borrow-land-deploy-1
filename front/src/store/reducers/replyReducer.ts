import { RepliesState } from '../types/replies'
import {
  Actions,
  FETCH_MY_REPLIES,
  FETCH_MY_REPLIES_SUCCESS,
  FETCH_REPLIES_ERROR,
  FETCH_TOTAL_REPLIES_COUNT,
  ADD_NEW_REPLY,
  ADD_NEW_REPLY_SUCCESS,
  ADD_NEW_REPLY_ERROR,
} from '../action-creators/replies'
import { Dispatch } from 'react'

import { fetchMyReplies, createReply } from '../../services/api/replies'
import { FETCH_ERROR_MESSAGE } from '../action-creators/errorMessages'
import { getMappedReplies } from '../../mapping/getMappedReplies'
import { CreateReplies } from '../../services/types'

const initialState: RepliesState = {
  myReplies: [],
  loading: false,
  totalCount: 0,
  error: null,
}

export const replyReducer = (
  state = initialState,
  action: ActionsTypes
): RepliesState => {
  switch (action.type) {
    case FETCH_MY_REPLIES:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_MY_REPLIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        myReplies: action.payload,
      }
    case FETCH_TOTAL_REPLIES_COUNT:
      return {
        ...state,
        loading: false,
        error: null,
        totalCount: action.payload,
      }
    case FETCH_REPLIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case ADD_NEW_REPLY:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case ADD_NEW_REPLY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        myReplies: [...state.myReplies, action.payload],
      }
    case ADD_NEW_REPLY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

type InferValueTypes<T> = T extends { [key: string]: infer Data } ? Data : never
type ActionsTypes = ReturnType<InferValueTypes<typeof Actions>>

export const fetchMyRepliesThunk = (page: number, limit: number) => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      dispatch(Actions.fetchReplies())
      const response = await fetchMyReplies(page, limit)
      dispatch(Actions.fetchTotalRepliesCount(response.data.count))
      const data = getMappedReplies(response.data.rows)
      dispatch(Actions.fetchRepliesSuccess(data))
    } catch (e) {
      dispatch(Actions.fetchRepliesError(FETCH_ERROR_MESSAGE))
    }
  }
}

export const addNewReplyThunk = (
  requestId: string | number,
  replie: CreateReplies
) => {
  return async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      dispatch(Actions.addNewReply())
      const response = await createReply(requestId, replie)
      dispatch(Actions.addNewReplySuccess(response.data.reply))
    } catch (e) {
      dispatch(Actions.addNewReplyError(FETCH_ERROR_MESSAGE))
    }
  }
}
