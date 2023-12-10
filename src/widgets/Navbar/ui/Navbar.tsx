import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';
import styles from './Navbar.module.scss';

interface INavbarProps {
  className: string;
}

export const Navbar: React.FC = ({ className }: INavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={cn(styles.navbar, {}, [className])}>
      <AppLink theme={EAppLinkTheme.SECONDARY} to={RoutePaths.home}>
        {t('Главная')}
      </AppLink>
      <AppLink theme={EAppLinkTheme.SECONDARY} to={RoutePaths.about}>
        {t('О нас')}
      </AppLink>
    </nav>
  );
};
