import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import React, { PropsWithChildren } from 'react';
import { useStore } from 'react-redux';

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

  React.useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
          store.reducerManager.remove(name);
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
