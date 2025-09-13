import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import AppTheme from './shared-theme/AppTheme.tsx';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <AppTheme>
      <App />
    </AppTheme>
  </React.StrictMode>,
);
