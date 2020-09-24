import React from 'react';
import styled from 'styled-components';

export default () => (
  <Container>
    <p>Joey ter Meulen, 2020</p>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100px;
  color: white;
  background: #343434;

  & p {
    margin-left: 20px;
    line-height: 100px;
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

