import React from 'react'
import { StoryFn } from '@storybook/react'
import { EnumTheme, ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: EnumTheme) => (StoryComponent: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
)
