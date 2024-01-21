import React, { MutableRefObject } from 'react';

interface IUseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay?: number;
}

export const useModal = (props: IUseModalProps) => {
  const {
    onClose,
    isOpen,
    animationDelay,
  } = props

  const [isClosing, setIsClosing] = React.useState(false);

  const timerRef = React.useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen]);

  const onCloseHandler = React.useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler();
    }
  }, [onCloseHandler])

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  return {
    isClosing,
    isMounted,
    onCloseHandler
  }
}
