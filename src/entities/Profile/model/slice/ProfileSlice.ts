import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProfile, ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  },
})

export const { actions: profileAction } = ProfileSlice
export const { reducer: profileReducer } = ProfileSlice
