import { StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue.test', () => {
  test('Should return counter value', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 }
    }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
