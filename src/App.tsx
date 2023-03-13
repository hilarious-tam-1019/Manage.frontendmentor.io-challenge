import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Header } from './components/Header';

// Types
type ThemeType = {
  brightRed: string;
  darkBlue: string;
  darkGrayishBlue: string;
  veryDarkBlue: string;
  veryPaleRed: string;
  veryLightGray: string;
  white: string;
  overlay: string;
  error: string;
};

// Theme
export const theme = {
  brightRed: 'hsl(12, 88%, 59%)',
  darkBlue: 'hsl(228, 39%, 23%)',
  darkGrayishBlue: 'hsl(227, 12%, 61%)',
  veryDarkBlue: 'hsl(233, 12%, 13%)',
  veryPaleRed: 'hsl(13, 100%, 96%)',
  veryLightGray: 'hsl(0, 0%, 98%)',
  white: 'hsl(0, 0%, 100%)',
  overlay: 'rgba(34, 29, 37, 0.2)',
  error: '#F33C3C',
};

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  html {
    font-size: 62.5%; // 1rem = 10px
    @media only screen and (max-width: 56.25em) {
      font-size: 56.25%; //1 rem = 9px
    }
    @media only screen and (max-width: 37.5em) {
      font-size: 50%; //1 rem = 8px,
    }
  }
  body {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }
  main {
    position: relative;
    min-height: 100vh;
    color: ${(props) => props.theme.darkBlue};
    background: ${(props) => props.theme.white};
    overflow-x: hidden;
  }
  ul {
    text-decoration: none;
    list-style: none;
  }
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  input,textarea {
    border: none;
    outline: none;
  }
  h1, h2, h3 {
    margin: 0;
  }
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Header />
      </main>
    </ThemeProvider>
  );
};
