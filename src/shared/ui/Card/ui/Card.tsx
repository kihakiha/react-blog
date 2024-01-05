import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import styles from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
export const Card = ({ className = '', children, ...otherProps }: ICardProps) => (
  <div className={cn(styles.Card, {}, [className])} {...otherProps}>
    {children}
  </div>
);
