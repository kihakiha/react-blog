import React from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import styles from './Text.module.scss';

export enum ETextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ETextTheme;
}
export const Text = (props: ITextProps) => {
  const {
    text = '',
    title = '',
    className = '',
    theme = ETextTheme.PRIMARY
  } = props;
  return (
    <div className={cn(styles.TextWrapper, { [styles[theme]]: true }, [className])}>
      {title && <p className={styles.Title}>{title}</p>}
      {text && <p className={styles.Text}>{text}</p>}
    </div>
  );
};
