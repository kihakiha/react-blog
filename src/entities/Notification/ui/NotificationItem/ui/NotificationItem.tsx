import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './NotificationItem.module.scss';

interface INotificationItemProps {
  className?: string;
}
export const NotificationItem = (props: INotificationItemProps) => {
  const {
    className = ''
  } = props
  
  const { t } = useTranslation();
  return (
    <div className={cn(styles.NotificationItem, {}, [className])}>

    </div>
  );
};
