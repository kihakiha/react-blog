import React, { Suspense } from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userAction } from 'entities/User';
import { AppRouter } from './providers/router';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const userInited = useSelector(getUserInited);

  React.useEffect(() => {
    dispatch(userAction.initAuthData())
  }, [dispatch])

  return (
    <div className={cn('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {userInited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
