import axios from 'axios'
import { userAction } from '@/entities/User'
import { TestAsyncThunk } from '@/shared/config/tests/testAsyncThunk'
import { loginByUsername } from './LoginByUsername'

describe('LoginByUsername.test', () => {
  test('Fulfilled with user data', async () => {
    const userValue = { username: '123', id: '1' }

    const thunk = new TestAsyncThunk(loginByUsername)

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.api.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue))
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
  })

  test('Rejected with 403 status code', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
