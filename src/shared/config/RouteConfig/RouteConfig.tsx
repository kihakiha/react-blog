import React from 'react'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticleEditPage } from 'pages/ArticleEditPage'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean,
}

export enum EAppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
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
  [EAppRoutes.PROFILE]: {
    path: `${RoutePaths.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  }
}
