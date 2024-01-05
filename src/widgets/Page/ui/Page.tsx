import React, { MutableRefObject, ReactNode, UIEvent } from 'react';
import { cn } from 'shared/libs/classNames/classNames';
import { useInfiniteScroll } from 'shared/libs/hook/useInfiniteScroll';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useInitialEffect } from 'shared/libs/hook/useInitialEffect';
import { useThrottle } from 'shared/libs/hook/useThrottle';
import styles from './Page.module.scss';
import { ScrollRestorationAction } from '../ScrollRestoration/model/slice/ScrollRestorationSlice';
import { getScroll, getScrollByPath } from '../ScrollRestoration/model/selectors/ScrollRestorationSelectors';

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

  const dispatch = useAppDispatch();
  const location = useLocation();

  const wrapperRef = React.useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = React.useRef() as MutableRefObject<HTMLDivElement>;
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, location.pathname));

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    console.log('SCROLL');

    dispatch(ScrollRestorationAction.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: location.pathname
    }));
  }, 500)

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  })

  return (
    <section
      ref={wrapperRef}
      className={cn(styles.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
