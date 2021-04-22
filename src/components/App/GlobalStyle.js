import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import-normalize;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --accent: #058373;
    --black: #0c1427;
    --gray: #e8eaf0;
    --gray-dark: #8697a8;
  }

  body {
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    color: var(--black);
    overflow: ${props => props.overflow === true ? 'hidden' : 'initial'};
  }
`;