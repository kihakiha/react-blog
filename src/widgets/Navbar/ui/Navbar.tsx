import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userAction } from 'entities/User';
import styles from './Navbar.module.scss';

interface INavbarProps {
  className: string;
}

export const Navbar: React.FC = ({ className }: INavbarProps) => {
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
        <Button
          type="button"
          theme={EButtonTheme.CLEAR_INVERTED}
          className={styles.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </nav>
    )
  }

  return (
    <nav className={cn(styles.navbar, {}, [className])}>
      <Button
        type="button"
        theme={EButtonTheme.CLEAR_INVERTED}
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
};
