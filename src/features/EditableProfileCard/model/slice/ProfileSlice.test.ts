import { ECountry } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { profileAction, profileReducer } from './ProfileSlice';
import { updateProfileData } from '../services/UpdateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema';

const data = {
  username: 'Jest',
  firstName: 'Jest',
  lastName: 'Test',
  age: 2,
  city: 'San Francisco',
  country: ECountry.USA,
  currency: ECurrency.USD,
}

describe('ProfileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileAction.setReadonly(true)
    )).toEqual(
      { readonly: true }
    )
  })

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: 'Test' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileAction.cancelEdit()
    )).toEqual(
      {
        readonly: true,
        validateErrors: undefined,
        data,
        form: data
      }
    )
  })

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { firstName: 'Test' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileAction.updateProfile({ firstName: 'Test Passed' })
    )).toEqual(
      {
        form: {
          firstName: 'Test Passed'
        }
      }
    )
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.SERVER_ERROR] };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending(''),
    )).toEqual(
      {
        isLoading: true, validateErrors: undefined
      }
    )
  })

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    )).toEqual(
      {
        data,
        form: data,
        isLoading: false,
        readonly: true,
        validateErrors: undefined
      }
    )
  })
})
