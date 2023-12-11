import React from 'react'

export enum EnumTheme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface IThemeContextProps {
  theme?: EnumTheme
  setTheme?: (theme: EnumTheme) => void
}

export const ThemeContext = React.createContext<IThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
