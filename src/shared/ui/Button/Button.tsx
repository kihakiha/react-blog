import React, { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import styles from './Button.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
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
}
export const Button: React.FC<PropsWithChildren<IButtonProps>> = (props) => {
  const {
    className = '', children, theme = '', square = '', size = '', ...otherProps
  } = props;

  const mods = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
  }

  return (
    <button
      type="button"
      className={cn(
        styles.Button,
        mods,
        [className],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
