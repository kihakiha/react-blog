import {
  Action, EnhancedStore, Reducer, ReducersMapObject, StateFromReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { articlesPageSchema } from 'pages/ArticlesPage';
import { ScrollRestorationSchema } from 'widgets/Page/ScrollRestoration/model/types/ScrollRestorationSchema';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  scrollRestoration: ScrollRestorationSchema,
  // Async Reducers
  loginForm?: LoginSchema,
  profile?: ProfileSchema,
  articleDetails?: ArticleDetailsSchema,
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: articlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type TMountedReducers = OptionalRecord<StateSchemaKey, boolean>
export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;

  getMountedReducers: () => TMountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: IReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg,
  state: StateSchema,
}
