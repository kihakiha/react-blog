import { ECountry } from '@/entities/Country/model/types/counrty';
import { ECurrency } from '@/entities/Currency/model/types/Currency';

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
