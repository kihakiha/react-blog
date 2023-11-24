import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { type RouteProps } from 'react-router-dom'

export enum EAppRoutes {
  HOME = 'home',
  ABOUT = 'about',
}

export const RoutePaths: Record<EAppRoutes, string> = {
  [EAppRoutes.HOME]: '/',
  [EAppRoutes.ABOUT]: '/about'
}

export const RouteConfig: Record<EAppRoutes, RouteProps> = {
  [EAppRoutes.HOME]: {
    path: RoutePaths.home,
    element: <HomePage />
  },
  [EAppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />
  }
}
