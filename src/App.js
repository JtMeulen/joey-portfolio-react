import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { defaultTheme } from './themes';
import { Navbar, Header, Carousel } from './components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: lightsteelblue; /* TODO just for testing to see the bg color */
`

export default () => {
  return (
    <Fragment>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={defaultTheme}>
          <AppContainer>
            <Navbar />
            <Header />
            <Carousel content={[1,2,3]}/>

            {/* Web pages here */}
            <Switch>
              <Route path="/123" exact render={()=> <div>yo</div>} />
              <Route path="/eyo" exact render={()=> <div>eyo</div>} />
            </Switch>

            <Carousel content={[4,5,6]}/>
            {/* Game pages here */}
            <Switch>
              <Route path="/abc" exact render={()=> <div>yo</div>} />
              <Route path="/ayo" exact render={()=> <div>eyo</div>} />
            </Switch>

            {/* Some adititional info about me */}

            {/* Footer with extra stuff */}
          </AppContainer>
        </ThemeProvider>
      </BrowserRouter>
    </Fragment>
  )
}
