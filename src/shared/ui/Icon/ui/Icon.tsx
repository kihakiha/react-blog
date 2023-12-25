import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import styles from './Icon.module.scss';

interface IIconProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}
export const Icon = React.memo(({ className = '', Svg }: IIconProps) => (
  <Svg className={cn(styles.Icon, {}, [className])} />
));
