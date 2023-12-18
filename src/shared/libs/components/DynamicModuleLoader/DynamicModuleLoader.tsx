import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import React, { PropsWithChildren } from 'react';
import { useStore } from 'react-redux';
import { useAppDispatch } from 'shared/libs/hook/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface IDynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount: boolean;
}

export const DynamicModuleLoader: React.FC<PropsWithChildren<IDynamicModuleLoaderProps>> = (props) => {
  const {
    children, reducers, removeAfterUnmount
  } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      { children }
    </>
  );
};
