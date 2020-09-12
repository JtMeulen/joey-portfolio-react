import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
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
    <Header />
    <About />
    <Skills />
    <Portfolio />
    <Footer />
  </Fragment>
);
