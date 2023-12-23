import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button, EButtonTheme } from './Button';

describe('Button UI', () => {
  test('without params', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('without theme param', () => {
    render(<Button theme={EButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
  });
});
