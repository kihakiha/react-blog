import React, { CSSProperties, ReactNode } from 'react';
import { TMods, cn } from 'shared/libs/classNames/classNames';
import styles from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
  around: styles.justifyAround,
}

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn
}

export interface IFlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: number;
  max?: boolean;
}
export const Flex = (props: IFlexProps) => {
  const {
    className = '',
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max = true,
  } = props

  const additionalClasses = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction]
  ]

  const componentStyles = React.useMemo<CSSProperties>(() => ({
    gap: gap || 0,
  }), [gap])

  const mods: TMods = {
    [styles.max]: max
  }

  return (
    <div
      className={cn(styles.Flex, mods, additionalClasses)}
      style={componentStyles}
    >
      {children}
    </div>
  );
};
