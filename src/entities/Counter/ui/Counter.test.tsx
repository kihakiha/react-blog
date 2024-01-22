import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from '@/shared/config/tests/renderWithTranslation';
import { componentRender } from '@/shared/config/tests/componentRender';
import { Counter } from './Counter';

describe('Counter UI', () => {
  test('Test render', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    expect(screen.getByTestId('counterComponent')).toBeInTheDocument();
  });

  test('Test increment', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    const incrementBtn = screen.getByTestId('incrementBtn');
    expect(screen.getByTestId('counterComponent')).toBeInTheDocument();
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('valueTitle')).toHaveTextContent('1');
  });

  test('Test decrement', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
    const decrementBtn = screen.getByTestId('decrementBtn');
    expect(screen.getByTestId('counterComponent')).toBeInTheDocument();
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('valueTitle')).toHaveTextContent('9');
  });
});
