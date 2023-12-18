import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword.test', () => {
  test('Should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        password: 'password',
        isLoading: false
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual('password')
  })

  test('Should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
