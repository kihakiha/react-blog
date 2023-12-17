import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading.test', () => {
  test('Should return true', () => {
    const state: Partial<StateSchema> = {
      loginForm: {
        username: '',
        password: '',
        isLoading: true
      }
    }
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
  })

  test('Should return undefined with empty state', () => {
    const state: Partial<StateSchema> = {}
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
