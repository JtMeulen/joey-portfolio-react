import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Sidebar } from './components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  /* TODO: Create global vars for colors */
  color: #dedede;
  background-color: #15181c;
`

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <AppContainer>
        <Sidebar />

      </AppContainer>
    </Fragment>
  )
}

export default App;
