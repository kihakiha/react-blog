import React from 'react'
import { EnumTheme, useTheme } from '@/app/providers/ThemeProvider'

import { cn } from '@/shared/libs/classNames/classNames'

import DarkThemeIcon from '@/shared/assets/icons/moon.svg'
import LightThemeIcon from '@/shared/assets/icons/sun.svg'
import { Button, EButtonTheme } from '@/shared/ui/Button/ui/Button'
import styles from './ThemeSwitcher.module.scss'

interface IThemeSwitcherProps {
  className?: string
}
export const ThemeSwitcher = React.memo(({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={cn(styles.ThemeSwitcher, {}, [className, styles.button])}
      theme={EButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === EnumTheme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  )
})
