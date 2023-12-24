import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePaths.home} state={{ from: location }} replace />
  }

  return children
}
