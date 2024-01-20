import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';
import { Avatar } from 'shared/ui/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import {
  getUserAuthData, isUserAdmin, isUserManager, userAction
} from 'entities/User';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';

interface IAvatarDropdownProps {
  className?: string;
}
export const AvatarDropdown = (props: IAvatarDropdownProps) => {
  const {
    className = ''
  } = props

  const { t } = useTranslation();

  const dispatch = useAppDispatch()

  const onLogout = React.useCallback(() => {
    dispatch(userAction.logout())
  }, [dispatch])

  const authData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const isAdminPanelAvailable = isAdmin || isManager

  if (!authData) return null;

  return (
    <Dropdown
      className={cn('', {}, [className])}
      triggerBtn={<Avatar size={40} src={authData.avatar} />}
      direction="bottom left"
      items={[
        ...(isAdminPanelAvailable ? [{
          content: t('Админка'),
          href: RoutePaths.admin_panel
        }] : []),
        {
          content: t('Профиль'),
          href: RoutePaths.profile + authData.id
        },
        {
          content: t('Выйти'),
          onClick: onLogout
        }
      ]}
    />
  );
};
