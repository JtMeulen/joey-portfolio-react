import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background: darkgrey;
`;

export default () => (
  <Container>
    <p>Hello, welcom to the footer</p>
    <p>Bye thanks for checking</p>
    <p>Joey ter Meulen 2020</p>
  </Container>
);
