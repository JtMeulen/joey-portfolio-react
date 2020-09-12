import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: #343434;
`;

const Text = styled.p`
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
`;

const Divider = styled.div`
  height: 2px;
  width: 60px;
  margin-top: 12px;
  background-color: white;
`;

export default (props) => (
  <Container>
    <Text>{props.children}</Text>
    <Divider />
  </Container>
);
