import React from 'react'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'
import { ProfilePage } from 'pages/ProfilePage'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean,
}

export enum EAppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<EAppRoutes, string> = {
  [EAppRoutes.HOME]: '/',
  [EAppRoutes.ABOUT]: '/about',
  [EAppRoutes.PROFILE]: '/profile',
  [EAppRoutes.NOT_FOUND]: '*',
}

export const RouteConfig: Record<EAppRoutes, AppRoutesProps> = {
  [EAppRoutes.HOME]: {
    path: RoutePaths.home,
    element: <HomePage />
  },
  [EAppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />
  },
  [EAppRoutes.NOT_FOUND]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />
  },
  [EAppRoutes.PROFILE]: {
    path: RoutePaths.profile,
    element: <ProfilePage />,
    authOnly: true,
  }
}
