import { LoginSchema } from '../types/LoginSchema'
import { loginAction, loginReducer } from './LoginSlice';

describe('LoginSlice.test', () => {
  test('test set username', () => {
    const state: Partial<LoginSchema> = { username: 'user' };
    expect(loginReducer(state as LoginSchema, loginAction.setUsername('username'))).toEqual({ username: 'username' })
  })

  test('test set password', () => {
    const state: Partial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, loginAction.setPassword('123123'))).toEqual({ password: '123123' })
  })
})
