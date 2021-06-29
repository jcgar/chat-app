import { createSlice } from '@reduxjs/toolkit'
import * as set from './set'
import * as get from './get'

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    conversation: { id: 0 }
  },
  reducers: set
})

export {
  actions,
  get,
}
export default reducer
