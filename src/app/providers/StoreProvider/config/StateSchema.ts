import {
  Action, EnhancedStore, Reducer, ReducersMapObject, StateFromReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { To, NavigateOptions } from 'react-router-dom';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,

  // Async Reducers
  loginForm?: LoginSchema,
  profile?: ProfileSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: IReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg
}
