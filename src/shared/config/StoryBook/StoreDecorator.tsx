import React from 'react'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'
import { profileReducer } from 'entities/Profile'
import { ReducersList } from 'shared/libs/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from 'entities/Article/model/slice/ArticleDetailsSlice'
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/AddCommentFormSlice'
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice'
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlePageSlice'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
  articlesPage: articlesPageReducer,
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
