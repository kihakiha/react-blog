import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { cn } from '@/shared/libs/classNames/classNames';
import { NotificationList } from '@/entities/Notification';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';
import notificationsSvg from '@/shared/assets/icons/notification.svg'
import { Drawer } from '@/shared/ui/Drawer';
import { AnimationProvider } from '@/shared/libs/components/AnimationProvider';
import styles from './NavbarNotifications.module.scss';

interface INavbarNotificationsProps {
  className?: string;
}
export const NavbarNotifications = (props: INavbarNotificationsProps) => {
  const {
    className = ''
  } = props

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const onOpenDrawer = React.useCallback(() => {
    setIsDrawerOpen(true)
  }, [])

  const onCloseDrawer = React.useCallback(() => {
    setIsDrawerOpen(false)
  }, [])

  const triggerBtn = (
    <Button onClick={onOpenDrawer} theme={EButtonTheme.CLEAR}>
      <Icon Svg={notificationsSvg} />
    </Button>
  )

  return (
    <div>
      <BrowserView>
        <Popover
          className={cn(styles.NavbarNotifications, {}, [className])}
          triggerBtn={triggerBtn}
          direction="bottom left"
        >
          <NotificationList className={styles.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {triggerBtn}
        <AnimationProvider>
          <Drawer
            isOpen={isDrawerOpen}
            onClose={onCloseDrawer}
          >
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </div>
  );
};
