import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ScrollRestorationSchema } from '../types/ScrollRestorationSchema'

const initialState: ScrollRestorationSchema = {
  scroll: {}
}

export const ScrollRestorationSlice = createSlice({
  name: 'ScrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[action.payload.path] = action.payload.position
    },
  },
})

export const { actions: ScrollRestorationAction } = ScrollRestorationSlice
export const { reducer: ScrollRestorationReducer } = ScrollRestorationSlice
