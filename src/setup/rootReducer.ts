import { combineReducers } from 'redux'

import appReducer from './app/store'

export const rootReducer = combineReducers({
  app: appReducer
})