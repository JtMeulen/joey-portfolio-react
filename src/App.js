import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Header, Navbar, About, Skills, Portfolio, Footer } from './components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Merriweather Sans', sans-serif;
    scroll-behavior: smooth;
  }
`;

export default () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <Navbar />
    <About />
    <Skills />
    <Portfolio />
    <Footer />
  </Fragment>
);
