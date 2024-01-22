import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePaths } from '@/shared/config/RouteConfig/RouteConfig';

import HomeIcon from '@/shared/assets/icons/home_icon.svg';
import ListIcon from '@/shared/assets/icons/list_icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg'

import { ISidebarItem } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: ISidebarItem[] = [
      {
        path: RoutePaths.home,
        Icon: HomeIcon,
        text: 'Главная',
      },
      {
        path: RoutePaths.about,
        Icon: ListIcon,
        text: 'О нас',
      },
    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePaths.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: RoutePaths.articles,
          Icon: ArticlesIcon,
          text: 'Статьи',
          authOnly: true,
        },
      )
    }

    return sidebarItemsList
  }
);
