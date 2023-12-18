import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import styles from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}
export const Loader = ({ className }: ILoaderProps) => (
  <div className={cn(styles.ldsRipple, {}, [className])}>
    <div />
    <div />
  </div>
);
