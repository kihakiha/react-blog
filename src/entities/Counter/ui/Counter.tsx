import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button';
import { counterAction } from '../model/slice/CounterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterAction.increment())
  }

  const decrement = () => {
    dispatch(counterAction.decrement())
  }
  return (
    <div data-testid="counterComponent">
      <h1 data-testid="valueTitle">{counterValue}</h1>
      <Button
        onClick={increment}
        type="button"
        data-testid="incrementBtn"
      >
        +
      </Button>
      <Button
        onClick={decrement}
        type="button"
        data-testid="decrementBtn"
      >
        -
      </Button>
    </div>
  );
};
