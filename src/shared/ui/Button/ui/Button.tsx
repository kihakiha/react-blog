import React, { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';
import { TMods, cn } from '@/shared/libs/classNames/classNames';

import styles from './Button.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  BACKGROUND_SECONDARY = 'backgroundSecondary',
}

export enum EButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EButtonTheme;
  square?: boolean;
  size?: EButtonSize;
  disabled?: boolean;
}
export const Button: React.FC<PropsWithChildren<IButtonProps>> = (props) => {
  const {
    className = '',
    children,
    theme = EButtonTheme.OUTLINE,
    square = '',
    size = '',
    disabled = false,
    ...otherProps
  } = props;

  const mods: TMods = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  }

  return (
    <button
      type="button"
      className={cn(
        styles.Button,
        mods,
        [className],
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
