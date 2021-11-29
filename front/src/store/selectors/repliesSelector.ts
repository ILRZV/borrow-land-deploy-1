import { RootState } from '../index'

export const getMyReplies = (state: RootState) => {
  return state.reply
}
