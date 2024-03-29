import { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginState } from './getLoginState'

describe('getLoginState.test', () => {
  test('Should return state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        password: '',
        isLoading: false
      }
    }
    expect(getLoginState(state as StateSchema)).toEqual({
      username: '',
      password: '',
      isLoading: false
    })
  })

  test('Should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginState(state as StateSchema)).toEqual(undefined)
  })
})
