import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button, EButtonTheme, EButtonSize } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import styles from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface ISidebarProps {
  className?: string;
}

export const Sidebar = React.memo(({ className }: ISidebarProps) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = (): void => {
    setCollapsed(!collapsed);
  };

  const itemsList = React.useMemo(() => (sidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      key={item.text}
      collapsed={collapsed}
    />
  ))), [collapsed, sidebarItemsList])

  return (
    <menu
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
        theme={EButtonTheme.BACKGROUND_SECONDARY}
        square
        size={EButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </menu>
  );
})
