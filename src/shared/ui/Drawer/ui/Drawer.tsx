import React, { ReactNode } from 'react';
import { TMods, cn } from 'shared/libs/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/libs/hook/useModal';
import { Portal } from '../../Portal/Portal';
import { Overlay } from '../../Overlay';
import styles from './Drawer.module.scss';

interface IDrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}
export const Drawer = (props: IDrawerProps) => {
  const {
    className = '',
    children,
    isOpen = false,
    onClose,
    lazy,
  } = props

  const {
    isClosing,
    isMounted,
    onCloseHandler,
  } = useModal({
    animationDelay: 200,
    onClose,
    isOpen,
  });

  const { theme } = useTheme();

  const mods: TMods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,

  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={cn(styles.Drawer, mods, [className, theme])}>
        <Overlay onClick={onCloseHandler} />
        <div
          className={styles.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
