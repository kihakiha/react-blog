import { Reducer } from '@reduxjs/toolkit';
import React, { PropsWithChildren } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from '../../hook/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
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
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey]
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
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
