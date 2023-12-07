import React from 'react'
import { StoryFn } from '@storybook/react'
import { EnumTheme } from 'app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent: StoryFn) => (
  <BrowserRouter>
    <StoryComponent />
  </BrowserRouter>
)
