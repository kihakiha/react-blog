import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './NotificationList.module.scss';

interface INotificationListProps {
  className?: string;
}
export const NotificationList = (props: INotificationListProps) => {
  const {
    className = ''
  } = props

  const { t } = useTranslation();
  return (
    <div className={cn(styles.NotificationList, {}, [className])}>
      /
    </div>
  );
};
