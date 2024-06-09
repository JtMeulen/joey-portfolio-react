import React from 'react';
import styled from 'styled-components';

export default () => (
  <Container>
    <p>Joey ter Meulen, {new Date().getFullYear()}</p>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100px;
  color: var(--color-text-invert);
  background: var(--color-background-dark);

  & p {
    margin-left: 20px;
    line-height: 100px;
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

