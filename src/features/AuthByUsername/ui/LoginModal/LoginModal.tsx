import React, { PropsWithChildren } from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { Modal } from 'shared/ui/Modal';
import styles from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal: React.FC<PropsWithChildren<ILoginModalProps>> = (props) => {
  const { className = '', isOpen, onClose } = props;

  return (
    <Modal
      className={cn(styles.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  )
}
