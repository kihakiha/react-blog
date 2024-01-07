import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import styles from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: ECardTheme
}

export enum ECardTheme {
  PRIMARY = 'primary',
  OUTLINE = 'outline',
}

export const Card = (props: ICardProps) => {
  const {
    className = '',
    children,
    theme = ECardTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <div
      className={cn(styles.Card, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  )
};
