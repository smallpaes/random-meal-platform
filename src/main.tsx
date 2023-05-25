import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';
import { theme } from './theme';
import { GlobalStyles } from './theme/globalStyles';
import App from './App.tsx';
import { store, persistor } from './store/store.ts';
import './index.css';
import { stripePromise } from './utils/stripe/stripe.utils.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
