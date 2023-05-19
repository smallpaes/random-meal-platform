import { createGlobalStyle } from 'styled-components';
import DancingScript from '../assets/fonts/Dancing_Script/static/DancingScript-Regular.ttf';

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

  a:focus, a:visited, a:link, a:active {
    color: inherit;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  button {
    border: none; 
    outline: none;
  }

  @font-face {
    font-family: "Dancing Script";
    src: url(${DancingScript}) format("woff2");
  }
`;
