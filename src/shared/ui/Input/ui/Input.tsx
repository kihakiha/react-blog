import React, { InputHTMLAttributes, PropsWithChildren, memo } from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps {
  className: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: IInputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const ref = React.useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = React.useState(false)

  const [caretPosition, setCaretPosition] = React.useState(0)

  React.useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  }

  const onHandleFocus = () => {
    setIsFocused(true)
  }

  const onHandleBlur = () => {
    setIsFocused(false)
  }

  const onHandleSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }
  return (
    <div className={cn(styles.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          className={styles.input}
          value={value}
          type={type}
          onChange={onHandleChange}
          onFocus={onHandleFocus}
          onBlur={onHandleBlur}
          onSelect={onHandleSelect}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  )
})
