import React, { PropsWithChildren, Suspense } from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal';
import styles from './LoginModal.module.scss';
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy';

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
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
