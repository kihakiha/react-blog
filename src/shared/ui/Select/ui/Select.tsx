import React, { ChangeEvent } from 'react';
import { TMods, cn } from 'shared/libs/classNames/classNames';

import styles from './Select.module.scss';

export interface ISelectOptions {
  value: string;
  content: string;
}

interface ISelectProps {
  className?: string;
  label?: string;
  options?: ISelectOptions[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}
export const Select = React.memo((props: ISelectProps) => {
  const {
    className = '',
    label,
    options,
    value,
    onChange,
    readonly
  } = props

  const OptionList = React.useMemo(() => options?.map((item) => (
    <option
      value={item.value}
      className={styles.option}
      key={item.value}
    >
      {item.content}
    </option>
  )), [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  const mods: TMods = {}

  return (
    <div className={cn(styles.Wrapper, mods, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        className={styles.select}
        value={value}
        onChange={onChangeHandler}
      >
        {OptionList}
      </select>
    </div>
  );
});
