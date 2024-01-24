import React from 'react';
import { TMods, cn } from '@/shared/libs/classNames/classNames';
import { useModal } from '@/shared/libs/hook/useModal';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal/Portal';

import styles from './Modal.module.scss';

interface IModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  center?: boolean;
}

export const Modal: React.FC<React.PropsWithChildren<IModalProps>> = (props) => {
  const {
    className = '',
    children,
    isOpen = false,
    onClose,
    lazy,
    center = false
  } = props;

  const {
    isClosing,
    isMounted,
    onCloseHandler,
  } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const mods: TMods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
    [styles.center]: center,
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={cn(styles.Modal, mods, [className])}>
        <Overlay onClick={onCloseHandler} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  )
};
