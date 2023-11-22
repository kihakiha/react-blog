import React from 'react';
import { EnumTheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: EnumTheme;
}

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === EnumTheme.DARK ? EnumTheme.LIGHT : EnumTheme.DARK;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
