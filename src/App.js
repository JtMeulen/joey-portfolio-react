import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const AppContainer = styled.p`
  text-align: center;
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppContainer>
        testing
      </AppContainer>
    </React.Fragment>
  )
}

export default App;
