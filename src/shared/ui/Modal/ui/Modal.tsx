import React, { MutableRefObject } from 'react';
import { TMods, cn } from 'shared/libs/classNames/classNames';

import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Modal.module.scss';

interface IModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
}

const ANIMATION_REF = 300;

export const Modal: React.FC<React.PropsWithChildren<IModalProps>> = (props) => {
  const {
    className = '',
    children,
    isOpen = false,
    onClose,
    lazy
  } = props;

  const [isClosing, setIsClosing] = React.useState(false);

  const timerRef = React.useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen]);

  const mods: TMods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  }

  const onCloseHandler = React.useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_REF);
    }
  }, [onClose]);

  const onClickContent = (e: React.MouseEvent) => {
    e.stopPropagation(); // Убирает закрывание модального окна при клике на контентную область
  }

  const onKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler();
    }
  }, [onCloseHandler])

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={cn(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={onCloseHandler}>
          <div className={styles.content} onClick={onClickContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
};
