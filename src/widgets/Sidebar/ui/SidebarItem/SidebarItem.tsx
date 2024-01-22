import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/libs/classNames/classNames';

import { getUserAuthData } from '@/entities/User';
import { AppLink, EAppLinkTheme } from '@/shared/ui/AppLink';
import { ISidebarItem } from '../../model/types/sidebar';
import styles from './SidebarItem.module.scss';

interface ISidebarItemProps {
  item: ISidebarItem,
  collapsed: boolean
}

export const SidebarItem = ({ item, collapsed }: ISidebarItemProps) => {
  const { t } = useTranslation('sidebar_items')
  const { text, Icon, path } = item;

  const isAuth = useSelector(getUserAuthData);

  if (!isAuth && item.authOnly) {
    return null
  }

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
