import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store/reducers'

export default <TypedUseSelectorHook<RootState>>useSelector
