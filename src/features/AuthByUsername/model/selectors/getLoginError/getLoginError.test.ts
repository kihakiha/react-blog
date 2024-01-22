import { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginError } from './getLoginError'

describe('getLoginError.test', () => {
  test('Should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
        username: '',
        password: '',
        isLoading: false
      }
    }
    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  test('Should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
