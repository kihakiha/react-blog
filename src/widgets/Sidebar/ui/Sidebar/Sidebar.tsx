import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
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
      <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        {t('Свернуть')}
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </aside>
  );
};
