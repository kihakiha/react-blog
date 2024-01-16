import { StateSchema } from 'app/providers/StoreProvider'
import { ECountry } from 'entities/Country'
import { ECurrency } from 'entities/Currency'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm.test', () => {
  test('Should return true', () => {
    const form = {
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
        form
      }
    }
    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })

  test('Should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
