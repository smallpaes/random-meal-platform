import { FC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './theme/globalStyles';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
};

export default App;
