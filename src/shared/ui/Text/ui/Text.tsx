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

export enum ETextSize {
  XS = 'size_xs',
  M = 'size_m',
  L = 'size_l',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ETextTheme;
  align?: ETextAlign;
  size?: ETextSize;
}

type THeaderTag = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<ETextSize, THeaderTag> = {
  [ETextSize.XS]: 'h3',
  [ETextSize.M]: 'h2',
  [ETextSize.L]: 'h1',
};

export const Text = React.memo((props: ITextProps) => {
  const {
    text = '',
    title = '',
    className = '',
    theme = ETextTheme.PRIMARY,
    align = ETextAlign.LEFT,
    size = ETextSize.M,
  } = props;

  const mods: TMods = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles[size]]: true,
  }

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={cn(styles.TextWrapper, mods, [className])}>
      {title && <HeaderTag className={styles.Title}>{title}</HeaderTag>}
      {text && <p className={styles.Text}>{text}</p>}
    </div>
  );
});
