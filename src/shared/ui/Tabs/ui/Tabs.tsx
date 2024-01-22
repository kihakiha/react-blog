import React, { ReactNode } from 'react';
import { cn } from '@/shared/libs/classNames/classNames';
import { Card, ECardTheme } from '../../Card';
import styles from './Tabs.module.scss';

export interface ITabItem {
  value: string;
  content: ReactNode;
}

interface ITabsProps {
  className?: string;
  tabs: ITabItem[];
  value: string;
  onTabClick: (tab: ITabItem) => void;
}

export const Tabs = (props: ITabsProps) => {
  const {
    className = '',
    tabs,
    value,
    onTabClick,
  } = props

  const onClickHandler = React.useCallback((tab: ITabItem) => () => {
    onTabClick(tab)
  }, [onTabClick]);

  return (
    <div className={cn(styles.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={styles.tab}
          theme={tab.content === value ? ECardTheme.PRIMARY : ECardTheme.OUTLINE}
          onClick={onClickHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
