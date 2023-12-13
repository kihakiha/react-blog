import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/user'

const initialState: UserSchema = {}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const { actions: userAction } = UserSlice
export const { reducer: userReducer } = UserSlice
