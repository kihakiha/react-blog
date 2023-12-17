import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { t } from 'i18next';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';
import { ISidebarItem } from '../../model/items';
import styles from './SidebarItem.module.scss';

interface ISidebarItemProps {
  item: ISidebarItem,
  collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: ISidebarItemProps) => {
  const { text, Icon, path } = item;
  return (
    <AppLink
      theme={EAppLinkTheme.SECONDARY}
      to={path}
      className={cn(styles.item, { [styles.collapsed]: collapsed })}
    >
      <Icon className={styles.icon} />
      <span className={styles.link}>
        {t(text)}
      </span>
    </AppLink>
  )
};
