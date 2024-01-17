import React from 'react'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'
import { AdminPanelPage } from 'pages/AdminPanelPage'
import { EUserRoles } from 'entities/User'
import { ForibiddenPage } from 'pages/ForibiddenPage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean,
  roles?: EUserRoles[],
}

export enum EAppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<EAppRoutes, string> = {
  [EAppRoutes.HOME]: '/',
  [EAppRoutes.ABOUT]: '/about',
  [EAppRoutes.PROFILE]: '/profile/', // + :id
  [EAppRoutes.ARTICLES]: '/articles',
  [EAppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
  [EAppRoutes.ARTICLE_CREATE]: '/articles/new',
  [EAppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [EAppRoutes.ADMIN_PANEL]: '/admin',
  [EAppRoutes.FORBIDDEN]: '/forbidden',
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
  [EAppRoutes.ARTICLES]: {
    path: RoutePaths.articles,
    element: <ArticlesPage />,
    authOnly: true
  },
  [EAppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePaths.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [EAppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePaths.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [EAppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePaths.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true
  },
  [EAppRoutes.ADMIN_PANEL]: {
    path: `${RoutePaths.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [EUserRoles.ADMIN, EUserRoles.MANAGER]
  },
  [EAppRoutes.FORBIDDEN]: {
    path: `${RoutePaths.forbidden}`,
    element: <ForibiddenPage />,
  },
  [EAppRoutes.PROFILE]: {
    path: `${RoutePaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  }
}
