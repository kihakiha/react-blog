import React, { ReactNode } from 'react';
import { TMods, cn } from 'shared/libs/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../../Portal/Portal';
import { Overlay } from '../../Overlay';
import styles from './Drawer.module.scss';

interface IDrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}
export const Drawer = (props: IDrawerProps) => {
  const {
    className = '',
    children,
    isOpen = false,
    onClose,
  } = props

  const { theme } = useTheme();

  const mods: TMods = {
    [styles.opened]: isOpen,
  }

  return (
    <Portal>
      <div className={cn(styles.Drawer, mods, [className, theme])}>
        <Overlay onClick={onClose} />
        <div
          className={styles.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
