import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 60px 0;
  background-color: ${props => props.theme.colors.headerBG};
`;

const Text = styled.span`
  width: 100%;
  font-size: ${props => props.size}px;
  display: block;
  text-align: center;
  color: ${props => props.theme.colors.fontWhite};
`;

const Divider = styled.div`
  max-width: 400px;
  margin: 20px auto;
  border-top: 1px solid grey;
`;

export default () => (
  <Container>
    <Text size={64}>Joey ter Meulen</Text>
    <Divider />
    <Text size={32}>Frontend Web Developer</Text>
  </Container>
);
