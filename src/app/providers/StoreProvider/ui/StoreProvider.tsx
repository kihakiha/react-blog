import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: Partial<StateSchema>;
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState: inititalState, asyncReducers } = props;

  const store = createReduxStore(
    inititalState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
