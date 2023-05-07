import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }
`;
