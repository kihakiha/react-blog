import React from 'react';
import { EnumTheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

interface IUseThemeResult {
  toggleTheme: () => void;
  theme: EnumTheme;
}

export function useTheme(): IUseThemeResult {
  const { theme = EnumTheme.LIGHT, setTheme } = React.useContext(ThemeContext);

  const toggleTheme = (): void => {
    // const newTheme = theme === EnumTheme.DARK ? EnumTheme.LIGHT : EnumTheme.DARK;
    // if (setTheme) {
    //   setTheme(newTheme);
    // }

    let newTheme: EnumTheme;
    switch (theme) {
      case EnumTheme.DARK:
        newTheme = EnumTheme.LIGHT;
        break;
      case EnumTheme.LIGHT:
        newTheme = EnumTheme.DARK;
        break;
      default:
        newTheme = EnumTheme.LIGHT;
        break;
    }
    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
