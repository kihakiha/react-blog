import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/LoginSchema'
import { loginByUsername } from '../services/LoginByUsername'

const initialState: LoginSchema = {
  isLoading: false,
  password: '',
  username: ''
}

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload
      })
  },
})

export const { actions: loginAction } = LoginSlice
export const { reducer: loginReducer } = LoginSlice