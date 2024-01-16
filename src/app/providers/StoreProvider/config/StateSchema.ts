import {
  Action, EnhancedStore, Reducer, ReducersMapObject, StateFromReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { articlesPageSchema } from 'pages/ArticlesPage';
import { rtkApi } from 'shared/api/rtkApi';
import { ScrollRestorationSchema } from 'widgets/Page/ScrollRestoration/model/types/ScrollRestorationSchema';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  scrollRestoration: ScrollRestorationSchema,

  // RTK
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Async Reducers
  loginForm?: LoginSchema,
  profile?: ProfileSchema,
  articleDetails?: ArticleDetailsSchema,
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: articlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema
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
