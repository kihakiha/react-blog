import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileValidateError } from './getProfileValidateError'
import { ValidateProfileError } from '../../types/editableProfileCardSchema'

describe('getProfileValidateError.test', () => {
  test('Should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.INCCORECT_USER_AGE]
      }
    }
    expect(getProfileValidateError(state as StateSchema)).toEqual(['INCCORECT_USER_AGE'])
  })

  test('Should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateError(state as StateSchema)).toEqual(undefined)
  })
})
