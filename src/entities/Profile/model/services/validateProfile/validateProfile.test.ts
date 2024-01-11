import { ECountry } from 'entities/Country'
import { ECurrency } from 'entities/Currency'
import { validateProfile } from './validateProfile'
import { ValidateProfileError } from '../../types/profile'

const data = {
  username: 'Jest',
  firstName: 'Jest',
  lastName: 'Test',
  age: 2,
  city: 'San Francisco',
  country: ECountry.USA,
  currency: ECurrency.USD,
}

describe('ValidateProfile.test', () => {
  test('Success', async () => {
    const result = validateProfile(data)

    expect(result).toEqual([]);
  })

  test('Without firstName or lastName', async () => {
    const result = validateProfile({ ...data, firstName: '', lastName: '' })

    expect(result).toEqual([ValidateProfileError.INCCORECT_USER_DATA]);
  })

  test('With wrong age', async () => {
    const result = validateProfile({ ...data, age: undefined })

    expect(result).toEqual([ValidateProfileError.INCCORECT_USER_AGE]);
  })

  test('Without data', async () => {
    const result = validateProfile(undefined)

    expect(result).toEqual([
      ValidateProfileError.NO_DATA,
    ]);
  })
})
