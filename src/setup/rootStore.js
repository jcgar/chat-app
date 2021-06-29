import { createLogger } from 'redux-logger'
import { rootReducer } from './rootReducer'
import 'regenerator-runtime/runtime'
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'

const rootStore = () => {
  const logger = createLogger();
  const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(logger),
  })

  return {
    store
  }
};

export default rootStore