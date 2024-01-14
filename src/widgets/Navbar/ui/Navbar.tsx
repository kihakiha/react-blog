import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userAction } from 'entities/User';
import { Button, EButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text'
import { AppLink } from 'shared/ui/AppLink';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';
import { ETextSize } from 'shared/ui/Text/ui/Text';
import { Dropdown } from 'shared/ui/Dropdown';
import { Avatar } from 'shared/ui/Avatar';
import styles from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar = React.memo(({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = React.useCallback(() => {
    dispatch(userAction.logout())
  }, [dispatch])

  if (authData) {
    return (
      <nav className={cn(styles.navbar, {}, [className])}>
        <div className={styles.navLeft}>
          <Text size={ETextSize.L} className={styles.appName} title="REACT BLOG" />
          <AppLink
            to={RoutePaths.article_create}
            className={styles.newArticleLink}
          >
            {t('Новая статья')}
          </AppLink>
        </div>
        <Dropdown
          triggerBtn={<Avatar size={40} src={authData.avatar} />}
          direction="bottom left"
          items={[
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
      </nav>
    )
  }

  return (
    <nav className={cn(styles.navbar, {}, [className])}>
      <Text className={styles.appName} title="REACT BLOG" />
      <Button
        type="button"
        theme={EButtonTheme.CLEAR}
        className={styles.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal
          isOpen={isAuthModal}
          onClose={onCloseModal}
        />
      )}
    </nav>
  );
})
