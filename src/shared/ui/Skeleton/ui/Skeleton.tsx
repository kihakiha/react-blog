import React, { CSSProperties } from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './Skeleton.module.scss';

interface ISkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;

}
export const Skeleton = (props: ISkeletonProps) => {
  const {
    className,
    height,
    width,
    border,
  } = props

  const { t } = useTranslation();

  const componentStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }

  return (
    <div
      className={cn(styles.Skeleton, {}, [className])}
      style={componentStyles}
    />
  );
};
