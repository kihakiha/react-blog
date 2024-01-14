import React, { Fragment, ReactNode } from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { TDropDownDirection } from 'shared/types/ui';
import { AppLink } from '../../AppLink';
import styles from './Dropdown.module.scss';

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

const mapDirectionClass: Record<TDropDownDirection, string> = {
  'bottom left': styles.optionBottomLeft,
  'bottom right': styles.optionBottomRight,
  'top left': styles.optionTopLeft,
  'top right': styles.optionTopRight,
}

export const Dropdown = (props: IDropdownProps) => {
  const {
    className = '',
    items,
    triggerBtn,
    direction = 'bottom right'
  } = props

  const { t } = useTranslation();

  const directionClass = [
    mapDirectionClass[direction]
  ]

  return (
    <Menu
      as="div"
      className={cn(styles.Dropdown, {}, [className])}
    >
      <Menu.Button className={styles.btn}>
        {triggerBtn}
      </Menu.Button>
      <Menu.Items className={cn(styles.menu, {}, directionClass)}>
        {items.map((item) => {
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
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
};
