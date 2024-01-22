import { IProfile } from '@/entities/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

export const validateProfile = (profile?: IProfile) => {
  const errors: ValidateProfileError[] = []

  if (!profile) {
    errors.push(ValidateProfileError.NO_DATA)
    return errors
  }

  const { firstName, lastName, age } = profile;

  if (!firstName || !lastName) {
    errors.push(ValidateProfileError.INCCORECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCCORECT_USER_AGE)
  }

  return errors;
}
