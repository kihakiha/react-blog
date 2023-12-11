import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';

import 'app/styles/index.scss';

import './shared/config/i18n/i18n';

const rootEl = document.getElementById('root');
if (rootEl != null) {
  const root = createRoot(rootEl);

  root.render(
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>,
  );
}
