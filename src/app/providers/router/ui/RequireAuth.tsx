import React from 'react'
import { EUserRoles, getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';
import { getUserRoles } from 'entities/User/model/selectors/getUserRoles/getUserRoles';

interface IRequireAuth {
  children: JSX.Element,
  roles?: EUserRoles[]
}

export function RequireAuth(props : IRequireAuth) {
  const {
    children,
    roles
  } = props;

  const userRoles = useSelector(getUserRoles)

  const hasRequireRoles = React.useMemo(() => {
    if (!roles) return true;

    return roles.some((requiredRold) => {
      const hasRole = userRoles?.includes(requiredRold)

      return hasRole
    })
  }, [roles, userRoles])

  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={RoutePaths.home} state={{ from: location }} replace />
  }

  if (!hasRequireRoles) {
    return <Navigate to={RoutePaths.forbidden} state={{ from: location }} replace />
  }

  return children
}
