import React, { PropsWithChildren } from 'react';
import { cn } from 'shared/libs/classNames/classNames';

import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum EAppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: EAppLinkTheme;
}
export const AppLink: React.FC<PropsWithChildren<IAppLinkProps>> = (props) => {
  const { to, className, children, theme = EAppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link to={to} className={cn(styles.AppLink, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
