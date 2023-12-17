import React, { memo } from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import styles from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onToggle = (): void => {
    setCollapsed(!collapsed);
  };

  const itemsList = React.useMemo(() => (SidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      key={item.text}
      collapsed={collapsed}
    />
  ))), [collapsed])

  return (
    <aside
      data-testid="sidebar"
      className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <div className={styles.items}>
        {itemsList}
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
})
