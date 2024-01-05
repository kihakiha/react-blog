import React, { MutableRefObject, ReactNode } from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useInfiniteScroll } from 'shared/libs/hook/useInfiniteScroll';
import styles from './Page.module.scss';

interface IPageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}
export const Page = (props: IPageProps) => {
  const {
    className = '',
    children,
    onScrollEnd,
  } = props;

  const wrapperRef = React.useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  return (
    <section
      ref={wrapperRef}
      className={cn(styles.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
