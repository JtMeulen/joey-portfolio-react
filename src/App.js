import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { defaultTheme } from './themes';
import { PAGE_DETAILS } from './constants';
import { Navbar, Header, Carousel, About, Footer, Project } from './components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default () => (
  <Fragment>
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Navbar />
        <Header />
        <Carousel content={PAGE_DETAILS}/>

        <Switch>
          {PAGE_DETAILS.map((page) => {
            return <Route key={page.name} path={page.route} exact render={()=> <Project content={page} />} />
          })}
        </Switch>

        <About />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </Fragment>
);
