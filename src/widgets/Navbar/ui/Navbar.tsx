import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface INavbarProps {
  className: string;
}

export const Navbar: React.FC = ({ className }: INavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={cn(styles.navbar, {}, [className])}>
      <AppLink theme={EAppLinkTheme.SECONDARY} to="/">
        {t('Главная')}
      </AppLink>
      <AppLink theme={EAppLinkTheme.SECONDARY} to="/about">
        {t('О нас')}
        {t('тест плагина')}
      </AppLink>
    </nav>
  );
};
