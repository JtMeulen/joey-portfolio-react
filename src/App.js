import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import Scroll from 'react-scroll';
import { Header, Navbar, About, Skills, Portfolio, Footer } from './components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    

    @media (prefers-color-scheme: dark) {
      
    }
  }
`;

export default () => (
  <Fragment>
    <GlobalStyle />
    <Scroll.Element name="header"><Header /></Scroll.Element>
    <Navbar />
    <Scroll.Element name="about"><About /></Scroll.Element>
    <Scroll.Element name="skills"><Skills /></Scroll.Element>
    <Scroll.Element name="portfolio"><Portfolio /></Scroll.Element>
    <Footer />
  </Fragment>
);
