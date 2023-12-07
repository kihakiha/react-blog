import React from 'react'
import { StoryFn } from '@storybook/react'
import { EnumTheme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: EnumTheme) => (StoryComponent: StoryFn) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
)
