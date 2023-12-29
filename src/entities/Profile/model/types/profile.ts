import { ECountry } from 'entities/Country/model/types/counrty';
import { ECurrency } from 'entities/Currency/model/types/Currency';

export interface IProfile {
  id?: string;
  firstName?: string,
  lastName?: string,
  age?: number,
  currency?: ECurrency,
  country?: ECountry,
  city?: string,
  username?: string,
  avatar?: string
}

export interface ProfileSchema {
  data?: IProfile;
  form?: IProfile;
  isLoading: boolean;
  error?: string;
  readonly?: boolean;
  validateErrors?: ValidateProfileError[];
}

export enum ValidateProfileError {
  INCCORECT_USER_DATA = 'INCCORECT_USER_DATA',
  INCCORECT_USER_AGE = 'INCCORECT_USER_AGE',
  SERVER_ERROR = 'Server error',
  NO_DATA = 'No data'
}
