import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import {
  getUserAuthData,
} from 'entities/User';
import { Button, EButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text'
import { AppLink } from 'shared/ui/AppLink';
import { RoutePaths } from 'shared/config/RouteConfig/RouteConfig';
import { ETextSize } from 'shared/ui/Text/ui/Text';
import { HStack } from 'shared/ui/Stack';
import { NavbarNotifications } from 'features/NavbarNotifications';
import { AvatarDropdown } from 'features/AvatarDropdown';
import styles from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar = React.memo(({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData)

  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onCloseModal = React.useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = React.useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
      <nav className={cn(styles.navbar, {}, [className])}>
        <HStack className={styles.navLeft}>
          <Text size={ETextSize.L} className={styles.appName} title="REACT BLOG" />
          <AppLink
            to={RoutePaths.article_create}
            className={styles.newArticleLink}
          >
            {t('Новая статья')}
          </AppLink>
        </HStack>
        <HStack gap={16} justify="end">
          <NavbarNotifications />
          <AvatarDropdown />
        </HStack>
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
