import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ETextTheme, Text } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader';
import { VStack } from 'shared/ui/Stack';
import { useNotifications } from '../../../api/notificationAPI';
import styles from './NotificationList.module.scss';
import { NotificationItem } from '../../NotificationItem/ui/NotificationItem';

interface INotificationListProps {
  className?: string;
}
export const NotificationList = (props: INotificationListProps) => {
  const {
    className = ''
  } = props

  const { data, isLoading, error } = useNotifications(null, {
    pollingInterval: 5000,
  })

  const { t } = useTranslation();

  if (error) {
    return (
      <Text text={t('Ошибка на сервере :(')} theme={ETextTheme.ERROR} />
    )
  }

  if (isLoading) {
    return (
      <VStack gap={8} max justify="center" align="center" className={cn(styles.NotificationList, {}, [className])}>
        <Loader />
      </VStack>
    )
  }

  return (
    <VStack gap={8} max className={cn(styles.NotificationList, {}, [className])}>
      {data?.map((item) => (
        <NotificationItem
          key={item.id}
          item={item}
        />
      ))}
    </VStack>
  );
};
