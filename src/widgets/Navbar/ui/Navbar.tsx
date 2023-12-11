import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface INavbarProps {
  className: string;
}

export const Navbar: React.FC = ({ className }: INavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onToggleModal = React.useCallback(() => {
    setIsAuthModal(!isAuthModal)
  }, [isAuthModal])

  return (
    <nav className={cn(styles.navbar, {}, [className])}>
      <Button
        type="button"
        theme={EButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, neque.
      </Modal>
    </nav>
  );
};
