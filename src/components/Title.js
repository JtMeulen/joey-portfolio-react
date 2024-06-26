import React from 'react';
import styled from 'styled-components';

export default (props) => (
  <Container>
    <Text>{props.children}</Text>
    <Divider />
  </Container>
);

const Container = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: var(--color-background-dark);
`;

const Text = styled.p`
  margin: 0;
  color: var(--color-text-invert);
  text-transform: uppercase;
  font-size: 24px;
  text-align: center;
`;

const Divider = styled.div`
  height: 2px;
  width: 60px;
  margin-top: 12px;
  background-color: var(--color-text-invert);
`;
