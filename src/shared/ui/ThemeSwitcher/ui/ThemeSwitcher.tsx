import { EnumTheme, useTheme } from 'app/providers/ThemeProvider';
import React from 'react';

import { cn } from 'shared/libs/classNames/classNames';
import styles from './ThemeSwitcher.module.scss';

import DarkThemeIcon from 'shared/assets/icons/moon.svg';
import LightThemeIcon from 'shared/assets/icons/sun.svg';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
  className: string;
}
export const ThemeSwitcher: React.FC = ({ className }: IThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={cn(styles.ThemeSwitcher, {}, [className, styles.button])}
      theme={EButtonTheme.CLEAR}
      onClick={toggleTheme}>
      {theme === EnumTheme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  );
};
