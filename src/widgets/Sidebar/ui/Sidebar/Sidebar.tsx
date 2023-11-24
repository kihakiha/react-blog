import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface ISidebarProps {
  className: string;
}

export const Sidebar: React.FC = ({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <button type="button" onClick={onToggle}>
        toggle
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </aside>
  );
};
