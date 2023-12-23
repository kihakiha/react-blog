import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IProfile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfile } from '../validateProfile/validateProfile';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());

    const errors = validateProfile(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<IProfile>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }
      return response.data
    } catch (error) {
      console.log(error);

      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)
