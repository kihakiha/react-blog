import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: Partial<StateSchema>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState: inititalState } = props;

  const store = createReduxStore(inititalState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
