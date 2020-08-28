import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { defaultTheme } from './themes';
import { Header, About, Skills, Portfolio, Footer } from './components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto;
  }
`;

export default () => (
  <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </ThemeProvider>
  </Fragment>
);
