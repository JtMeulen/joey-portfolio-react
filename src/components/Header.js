import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 520px;
  background-image: url('/assets/images/header_bg.jpg');
  background-size: cover;
  background-position: top center;
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
  color: white;
  text-align: center;
  text-transform: uppercase;
`;

export default () => (
  <Container>
    <ColorOverlay />
    <Text size={60} weight={600}>Joey ter Meulen</Text>
    <Text size={16} weight={400}>Frontend Web Developer</Text>
  </Container>
);
