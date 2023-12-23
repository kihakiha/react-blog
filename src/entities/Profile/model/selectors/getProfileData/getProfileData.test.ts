import { StateSchema } from 'app/providers/StoreProvider'
import { ECountry } from 'entities/Country'
import { ECurrency } from 'entities/Currency'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('Should return true', () => {
    const data = {
      username: 'Jest',
      firstName: 'Jest',
      lastName: 'Test',
      age: 2,
      city: 'San Francisco',
      country: ECountry.USA,
      currency: ECurrency.USD,
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('Should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
