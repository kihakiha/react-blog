import React, { ReactNode } from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react'
import { TDropDownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../../styles/consts';

import styles from './Popover.module.scss';
import popupStyles from '../../../styles/popups.module.scss'

interface IPopoverProps {
  className?: string;
  triggerBtn: ReactNode;
  direction?: TDropDownDirection;
  children: ReactNode;
}
export const Popover = (props: IPopoverProps) => {
  const {
    className = '',
    triggerBtn,
    direction = 'bottom right',
    children
  } = props

  const directionClass = [
    mapDirectionClass[direction]
  ]

  return (
    <HPopover
      className={cn(styles.Popover, {}, [className, popupStyles.popup])}
    >
      <HPopover.Button className={popupStyles.trigger}>
        {triggerBtn}
      </HPopover.Button>

      <HPopover.Panel
        className={cn(styles.panel, {}, directionClass)}
      >
        {children}
      </HPopover.Panel>
    </HPopover>
  );
};
