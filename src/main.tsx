import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './theme/globalStyles';
import App from './App.tsx';
import { store } from './store/store.ts';
import './index.css';

import { CategoriesProvider } from './context/categories.context.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <CategoriesProvider>
            <App />
          </CategoriesProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
