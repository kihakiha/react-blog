import axios from 'axios'
import { userAction } from 'entities/User'
import { TestAsyncThunk } from 'shared/config/tests/testAsyncThunk'
import { loginByUsername } from './LoginByUsername'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('LoginByUsername.test', () => {
  test('Fulfilled with user data', async () => {
    const userValue = { username: '123', id: '1' }

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue))
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userValue)
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
  })

  test('Rejected with 403 status code', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))

    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: '123', password: '123' })

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
