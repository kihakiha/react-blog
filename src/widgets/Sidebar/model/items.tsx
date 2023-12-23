import React from 'react'
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';

import HomeIcon from 'shared/assets/icons/home_icon.svg';
import ListIcon from 'shared/assets/icons/list_icon.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  authOnly?: boolean;
}

export const SidebarItemsList: ISidebarItem[] = [
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
  {
    path: RoutePaths.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true,
  },
]
