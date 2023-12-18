import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test('Should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '',
        username: 'username',
        isLoading: false
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('username')
  })

  test('Should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
