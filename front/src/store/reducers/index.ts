import { combineReducers } from 'redux'
import { mapReducer } from './mapReducer'
import { requestReducer } from './requestReducer'
import userReducer from './userReducer'
import { resetPasswordReducer } from './resetPasswordReducer'
import { replyReducer } from './replyReducer'

export const rootReducer = combineReducers({
  map: mapReducer,
  request: requestReducer,
  user: userReducer,
  resetPassword: resetPasswordReducer,
  reply: replyReducer,
})

export type RootState = ReturnType<typeof rootReducer>
