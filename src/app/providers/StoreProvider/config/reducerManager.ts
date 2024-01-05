import {
  Action, Reducer, ReducersMapObject, combineReducers
} from '@reduxjs/toolkit'
import {
  IReducerManager,
  StateSchema,
  StateSchemaKey,
  TMountedReducers
} from './StateSchema'

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): IReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)
  let keysToRemove: StateSchemaKey[] = []

  const mountedReducers: TMountedReducers = {};

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,
    reduce: (state: StateSchema, action: Action) => {
      if (keysToRemove.length > 0) {
        state = { ...state }

        keysToRemove.forEach((key) => {
          delete state[key]
        })

        keysToRemove = []
      }

      // @ts-ignore
      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer;
      mountedReducers[key] = true;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)
      mountedReducers[key] = false;
      combinedReducer = combineReducers(reducers)
    }
  }
}
