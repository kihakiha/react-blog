import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test('Should return username', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        password: '',
        username: 'username',
        isLoading: false
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('username')
  })

  test('Should return undefined with empty state', () => {
    const state: Partial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
