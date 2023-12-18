import React from 'react'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername/model/slice/LoginSlice'
import { profileReducer } from 'entities/Profile'

const defaultAsyncReducers: Partial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
}

export const StoreDecorator = (
  state: Partial<StateSchema>,
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>
) => (StoryComponent: StoryFn) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <StoryComponent />
  </StoreProvider>
)
