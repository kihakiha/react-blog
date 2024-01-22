import React, { ReactNode } from 'react';
import { cn } from '@/shared/libs/classNames/classNames';
import copyIcon from '@/shared/assets/icons/copy.svg'
import { Button, EButtonTheme } from '../../Button';
import { Icon } from '../../Icon';

import styles from './Code.module.scss';

interface ICodeProps {
  className?: string;
  text: string;
}
export const Code = (props: ICodeProps) => {
  const {
    className,
    text
  } = props

  const onCopy = React.useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={cn(styles.Code, {}, [className])}>
      <Button onClick={onCopy} theme={EButtonTheme.CLEAR} className={styles.copyBtn}>
        <Icon Svg={copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
};
