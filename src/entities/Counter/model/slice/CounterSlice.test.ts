import { counterAction, counterReducer } from './CounterSlice'
import { CounterSchema } from '../types/counterSchema'

describe('CounterSlice.test', () => {
  test('Counter Slice with increment func', () => {
    const state: CounterSchema = { value: 10 }

    expect(counterReducer(state, counterAction.increment())).toEqual({ value: 11 })
  })

  test('Counter Slice with decrement func', () => {
    const state: CounterSchema = { value: 10 }

    expect(counterReducer(state, counterAction.decrement())).toEqual({ value: 9 })
  })

  test('Should work with empty state', () => {
    expect(counterReducer(undefined, counterAction.decrement())).toEqual({ value: -1 })
  })
})
