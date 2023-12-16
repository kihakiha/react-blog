import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { IUser, userAction } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<IUser>('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userAction.setAuthData(response.data))

      return response.data
    } catch (error) {
      console.log(error);

      return thunkAPI.rejectWithValue('Неверный логин или пароль')
    }
  }
)
