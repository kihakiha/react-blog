import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar UI', () => {
  test('Test render', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    componentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
