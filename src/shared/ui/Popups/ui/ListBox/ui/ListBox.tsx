import React, { Fragment, ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { cn } from 'shared/libs/classNames/classNames'
import { TDropDownDirection } from 'shared/types/ui'
import { mapDirectionClass } from '../../../styles/consts'
import { Button } from '../../../../Button'

import styles from './ListBox.module.scss'
import popupStyles from '../../../styles/popups.module.scss'

export interface IListBoxItems {
  value: string;
  content: ReactNode;
}

interface IListBoxProps {
  items?: IListBoxItems[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  label?: string;
  direction?: TDropDownDirection;
}

export const ListBox = (props: IListBoxProps) => {
  const {
    items,
    className = '',
    value,
    defaultValue,
    onChange,
    label,
    readonly,
    direction = 'bottom right'
  } = props

  const optionClasses = [
    mapDirectionClass[direction]
  ]

  return (
    <HListBox
      disabled={readonly}
      as="div"
      className={cn(styles.ListBox, {}, [className, popupStyles.popup])}
      value={value}
      onChange={onChange}
    >
      <HListBox.Label>
        {label && <span className={styles.label}>{`${label}>`}</span>}
      </HListBox.Label>
      <HListBox.Button
        className={popupStyles.trigger}
      >
        <Button disabled={readonly} className={styles.Button}>
          {value ?? defaultValue}
        </Button>
      </HListBox.Button>
      <HListBox.Options
        className={cn(styles.options, {}, optionClasses)}
      >
        {items?.map((item) => (
          <HListBox.Option
            key={item.value}
            value={item.value}
            as={Fragment}
          >
            {({ active, selected }) => (
              <li className={cn(styles.item, { [styles.active]: active, [styles.selected]: selected })}>
                {item.content}
              </li>
            )}
          </HListBox.Option>
        ))}
      </HListBox.Options>
    </HListBox>
  )
}
