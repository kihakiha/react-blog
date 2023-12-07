import React, { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import styles from './Button.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: EButtonTheme;
}
export const Button: React.FC<PropsWithChildren<IButtonProps>> = (props) => {
  const {
    className = '', children, theme = '', ...otherProps
  } = props;
  return (
    <button
      type="button"
      className={cn(
        styles.Button,
        {
          [styles[theme]]: true,
        },
        [className],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
