import React from 'react'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'
import { ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/ArticleDetailsSlice'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/AddCommentFormSlice'
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlePageSlice'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices'
import { profileReducer } from 'features/EditableProfileCard/model/slice/ProfileSlice'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articlesPage: articlesPageReducer,
  articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => (StoryComponent: StoryFn) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
)
