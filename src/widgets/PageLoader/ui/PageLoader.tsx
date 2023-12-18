import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { Loader } from 'shared/ui/Loader';
import styles from './PageLoader.module.scss';

interface IPageLoaderProps {
  className?: string;
}
export const PageLoader = ({ className }: IPageLoaderProps) => (
  <div className={cn(styles.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
