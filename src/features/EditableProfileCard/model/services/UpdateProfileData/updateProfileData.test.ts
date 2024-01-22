import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk'
import { ECountry } from '@/entities/Country'
import { ECurrency } from '@/entities/Currency'
import { updateProfileData } from './updateProfileData'
import { ValidateProfileError } from '../../types/editableProfileCardSchema'

const data = {
  id: '1',
  username: 'Jest',
  firstName: 'Jest',
  lastName: 'Test',
  age: 2,
  city: 'San Francisco',
  country: ECountry.USA,
  currency: ECurrency.USD,
}

describe('UpdateProfileData.test', () => {
  test('Success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  })

  test('Rejected with 403 status code', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR
    ])
  })

  test('Validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, firstName: '' }
      }
    })

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCCORECT_USER_DATA
    ])
  })
})
