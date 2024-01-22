import React, { ReactNode } from 'react'

type TSpring = typeof import('@react-spring/web')
type TGesture = typeof import('@use-gesture/react')

interface AnimationContextPayload {
  Gesture?: TGesture;
  Spring?: TSpring;
  isLoaded?: boolean;
}

// Контекст для lazy подгрузки библиотек анимации, экономит около 60кб в продакшен бандле
const AnimationContext = React.createContext<AnimationContextPayload>({});

// Библиотеки зависят друг от друга, ждем загрузку обеих
const getAsyncAnimationModules = () => Promise.all([
  import('@react-spring/web'),
  import('@use-gesture/react'),
])

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const SpringRef = React.useRef<TSpring>();
  const GestureRef = React.useRef<TGesture>();

  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    })
  }, []);

  const value = React.useMemo(() => ({
    Gesture: GestureRef.current,
    Spring: SpringRef.current,
    isLoaded,
  }), [isLoaded])

  return (
    <AnimationContext.Provider
      value={value}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimationsLibs = () => React.useContext(AnimationContext) as Required<AnimationContextPayload>
