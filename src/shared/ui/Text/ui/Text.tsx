import React from 'react';
import { TMods, cn } from 'shared/libs/classNames/classNames';

import styles from './Text.module.scss';

export enum ETextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum ETextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ETextTheme;
  align?: ETextAlign;
}
export const Text = React.memo((props: ITextProps) => {
  const {
    text = '',
    title = '',
    className = '',
    theme = ETextTheme.PRIMARY,
    align = ETextAlign.LEFT,
  } = props;

  const mods: TMods = {
    [styles[theme]]: true,
    [styles[align]]: true,
  }
  return (
    <div className={cn(styles.TextWrapper, mods, [className])}>
      {title && <p className={styles.Title}>{title}</p>}
      {text && <p className={styles.Text}>{text}</p>}
    </div>
  );
});
