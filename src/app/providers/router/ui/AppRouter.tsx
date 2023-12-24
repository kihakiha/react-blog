import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, RouteConfig } from 'shared/config/RouteConfig/RouteConfig'
import { PageLoader } from 'widgets/PageLoader'
import { RequireAuth } from './RequireAuth'

export const AppRouter = React.memo(() => {
  const renderWithWrapper = React.useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{route.element}</div>
      </Suspense>
    )
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    )
  }, [])

  return (
    <Routes>
      {Object.values(RouteConfig).map(renderWithWrapper)}
    </Routes>
  )
})
