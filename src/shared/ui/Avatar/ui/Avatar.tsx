import React, { CSSProperties } from 'react';
import { TMods, cn } from '@/shared/libs/classNames/classNames';

import styles from './Avatar.module.scss';

interface IAvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}
export const Avatar = (props: IAvatarProps) => {
  const {
    className = '',
    src,
    alt = 'Image',
    size,
  } = props;

  const mods: TMods = {}

  const componentStyles = React.useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size])

  return (
    <img
      src={src}
      className={cn(styles.Avatar, mods, [className])}
      alt={alt}
      style={componentStyles}
    />
  );
};
