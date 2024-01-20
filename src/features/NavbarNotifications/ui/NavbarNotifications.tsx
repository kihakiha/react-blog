import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { NotificationList } from 'entities/Notification';
import { Button, EButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { Popover } from 'shared/ui/Popups';
import notificationsSvg from 'shared/assets/icons/notification.svg'

import styles from './NavbarNotifications.module.scss';

interface INavbarNotificationsProps {
  className?: string;
}
export const NavbarNotifications = (props: INavbarNotificationsProps) => {
  const {
    className = ''
  } = props

  return (
    <Popover
      className={cn(styles.NavbarNotifications, {}, [className])}
      triggerBtn={(
        <Button theme={EButtonTheme.CLEAR}>
          <Icon Svg={notificationsSvg} />
        </Button>
      )}
      direction="bottom left"
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  );
};
