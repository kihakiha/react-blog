import React, { type PropsWithChildren } from 'react'
import { EnumTheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as EnumTheme) || EnumTheme.LIGHT

interface IThemeProviderProps {
  initialTheme?: EnumTheme
}

const ThemeProvider: React.FC<PropsWithChildren<IThemeProviderProps>> = (props) => {
  const { children, initialTheme = EnumTheme.LIGHT } = props

  const [theme, setTheme] = React.useState<EnumTheme>(initialTheme || defaultTheme)

  const defaultProps = React.useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
