import React, { ReactNode } from 'react';
import { TMods, cn } from 'shared/libs/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/libs/hook/useModal';
import { useAnimationsLibs } from 'shared/libs/components/AnimationProvider';
import { Portal } from '../../Portal/Portal';
import { Overlay } from '../../Overlay';
import styles from './Drawer.module.scss';

interface IDrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100

export const DrawerContent = (props: IDrawerProps) => {
  const {
    className = '',
    children,
    isOpen = false,
    onClose,
    lazy,
  } = props

  const {
    Spring,
    Gesture
  } = useAnimationsLibs();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = React.useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api]);

  React.useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer]);

  const closeDrawer = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose
    })
  }

  const bind = Gesture.useDrag(({
    last,
    velocity: [, vy],
    direction: [, dy],
    offset: [, oy],
    cancel,
    canceled
  }) => {
    if (oy < -70) cancel()

    if (last) {
      if (oy > height * 0.5 || (vy > 0.5 && dy > 0)) {
        closeDrawer(vy)
      } else {
        openDrawer()
      }
    } else {
      api.start({ y: oy, immediate: true })
    }
  }, {
    from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
  })

  const {
    isClosing,
    isMounted,
    onCloseHandler,
  } = useModal({
    animationDelay: 200,
    onClose,
    isOpen,
  });

  const { theme } = useTheme();

  const mods: TMods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  }

  if (!isOpen) {
    return null;
  }

  if (lazy && !isMounted) {
    return null
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal>
      <div className={cn(styles.Drawer, mods, [className, theme])}>
        <Overlay onClick={onCloseHandler} />
        <Spring.a.div
          className={styles.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

export const Drawer = React.memo((props: IDrawerProps) => {
  const {
    isLoaded
  } = useAnimationsLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />
})
