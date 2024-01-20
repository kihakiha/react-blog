import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import styles from './Overlay.module.scss';

interface IOverlayProps {
  className?: string;
  onClick?: () => void;
}
export const Overlay = (props: IOverlayProps) => {
  const {
    className = '',
    onClick
  } = props

  return (
    <div
      className={cn(styles.Overlay, {}, [className])}
      onClick={onClick}
    />
  );
};
