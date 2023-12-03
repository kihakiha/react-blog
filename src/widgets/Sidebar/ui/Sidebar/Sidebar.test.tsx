import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/libs/tests/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar UI', () => {
  test('Test render', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
