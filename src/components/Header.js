import React from 'react';
import styled from 'styled-components';

export default () => (
  <Container>
    <ColorOverlay />
    <Text size={60} weight={700}>Joey ter Meulen</Text>
    <Text size={24} weight={300}>Frontend Web Developer</Text>
  </Container>
);

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 520px;
  background-image: url('https://i.imgur.com/ii9kiKG.jpg');
  background-size: cover;
  background-position: center center;
`;

const ColorOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.2);
`;

const Text = styled.span`
  position: relative;
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  color: var(--color-text-invert);
  text-align: center;
  text-transform: uppercase;
`;
