import { getUserAuthData } from 'entities/User'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { RouteConfig } from 'shared/config/RouteConfig/RouteConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = React.memo(() => {
  const isAuth = useSelector(getUserAuthData)

  const routes = React.useMemo(() => Object.values(RouteConfig).filter((route) => {
    if (route.authOnly && !isAuth) {
      return false;
    }

    return true
  }), [isAuth])

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
        ))}
      </Routes>
    </Suspense>
  )
})
