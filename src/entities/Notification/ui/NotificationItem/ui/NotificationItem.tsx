import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { Card, ECardTheme } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink';
import { INotification } from '../../../model/types/notification';
import styles from './NotificationItem.module.scss';

interface INotificationItemProps {
  className?: string;
  item: INotification;
}
export const NotificationItem = (props: INotificationItemProps) => {
  const {
    className = '',
    item
  } = props

  const content = (
    <Card
      theme={ECardTheme.OUTLINE}
      className={cn(styles.NotificationItem, {}, [className])}
    >
      <Text
        title={item.title}
        text={item.description}
      />
    </Card>
  )

  if (item.href) {
    return (
      <AppLink className={styles.link} to={item.href}>
        {content}
      </AppLink>
    )
  }

  return content
};
