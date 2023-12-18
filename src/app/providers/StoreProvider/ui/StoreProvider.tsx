import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface IStoreProviderProps {
  children?: ReactNode;
  initialState?: Partial<StateSchema>;
  asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState: inititalState, asyncReducers } = props;

  const navigate = useNavigate();

  const store = createReduxStore(
    navigate,
    inititalState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
