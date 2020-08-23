import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 300px;
  background: lightsalmon;
`;

export default (props) => (
  <Container>
    {props.content.name}
  </Container>
);
