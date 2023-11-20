import React, { PropsWithChildren } from 'react';
import { EnumTheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as EnumTheme) || EnumTheme.LIGHT;

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = React.useState<EnumTheme>(defaultTheme);

  const defaultProps = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
