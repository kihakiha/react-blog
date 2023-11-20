import { Link, Route, Routes } from 'react-router-dom';

import './styles/index.scss';

import { Suspense } from 'react';
import { cn } from './helpers/classNames';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { HomePageLazy } from './pages/HomePage/HomePageLazy';
import { useTheme } from './theme/useTheme';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>

      <button onClick={toggleTheme}>Theme</button>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/'} element={<HomePageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
