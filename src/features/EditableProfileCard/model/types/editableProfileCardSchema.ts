import { IProfile } from 'entities/Profile/model/types/profile';

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
