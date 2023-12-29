import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<string>>(
  'profile/fetchProfileDatta',
  async (profileId, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<IProfile>(`/profile/${profileId}`);
      if (!response.data) {
        throw new Error();
      }
      return response.data
    } catch (error) {
      console.log(error);

      return rejectWithValue('Произошла непредвиденная ошибка')
    }
  }
)
