import React, { Suspense } from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { userAction } from 'entities/User';
import { AppRouter } from './providers/router';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userAction.initAuthData())
  }, [dispatch])

  return (
    <div className={cn('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
