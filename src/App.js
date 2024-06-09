import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import { Header, Navbar, About, Skills, Portfolio, Footer } from "./components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background-light: white;
    --color-background-dark: #343434;
    --color-text: black;
    --color-text-invert: white;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    scroll-behavior: smooth;
    
    background: var(--color-background-light);
    color: var(--color-text);

    /* @media (prefers-color-scheme: dark) {
      --color-background-light: #585858;
      --color-text: white;
    } */
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
