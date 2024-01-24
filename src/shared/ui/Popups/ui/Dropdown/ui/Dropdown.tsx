import React, { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { cn } from '@/shared/libs/classNames/classNames';
import { TDropDownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../../AppLink';
import { mapDirectionClass } from '../../../styles/consts';

import styles from './Dropdown.module.scss';
import popupStyles from '../../../styles/popups.module.scss'

export interface IDropdownItem {
  disabled?: boolean;
  content: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface IDropdownProps {
  className?: string;
  items: IDropdownItem[];
  triggerBtn: ReactNode;
  direction?: TDropDownDirection;
}

export const Dropdown = (props: IDropdownProps) => {
  const {
    className = '',
    items,
    triggerBtn,
    direction = 'bottom right'
  } = props

  const directionClass = [
    mapDirectionClass[direction]
  ]

  return (
    <Menu
      as="div"
      className={cn(styles.Dropdown, {}, [className, popupStyles.popup])}
    >
      <Menu.Button className={popupStyles.trigger}>
        {triggerBtn}
      </Menu.Button>
      <Menu.Items className={cn(styles.menu, {}, directionClass)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
              className={cn(styles.item, { [styles.active]: active })}
            >
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                key={index}
              >
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item
              as={Fragment}
              disabled={item.disabled}
              key={index}
            >
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};
