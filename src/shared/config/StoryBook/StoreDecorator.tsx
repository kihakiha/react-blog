import React from 'react'
import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (state: Partial<StateSchema>) => (StoryComponent: StoryFn) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
)
