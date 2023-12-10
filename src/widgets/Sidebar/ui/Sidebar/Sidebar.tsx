import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, EAppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';
import HomeIcon from 'shared/assets/icons/home_icon.svg';
import ListIcon from 'shared/assets/icons/list_icon.svg';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
  className: string;
}

export const Sidebar: React.FC = ({ className }: ISidebarProps) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      data-testid="sidebar"
      className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <div className={styles.items}>
        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          to={RoutePaths.home}
          className={styles.item}
        >
          <HomeIcon className={styles.icon} />
          <span className={styles.link}>
            {t('Главная')}
          </span>
        </AppLink>

        <AppLink
          theme={EAppLinkTheme.SECONDARY}
          to={RoutePaths.about}
          className={styles.item}
        >
          <ListIcon className={styles.icon} />
          <span className={styles.link}>
            {t('О нас')}
          </span>
        </AppLink>
      </div>
      <Button
        className={styles.collapseBtn}
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
        theme={EButtonTheme.BACKGROUND_INVERTED}
        square
        size={EButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </aside>
  );
};
