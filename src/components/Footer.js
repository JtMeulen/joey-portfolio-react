import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100px;
  color: white;
  background: #343434;

  & span {
    margin-left: 20px;
    line-height: 100px;
  }
`;

export default () => (
  <Container>
    <span>Joey ter Meulen, 2020</span>
  </Container>
);
