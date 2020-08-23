import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: ${props => props.theme.sizes.navbarHeight};
  background-color: ${props => props.theme.colors.navbarBG};
  color: ${props => props.theme.colors.fontWhite};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.span`
  margin-left: 30px;
  font-weight: 700;
  font-size: 24px;
`;

const Group = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-self: center;
`;

const Link = styled.span`
  margin-right: 12px;
`;

export default () => (
  <Container>
    <Title>Joey ter Meulen</Title>
    <Group>
      <Link>Web</Link>
      <Link>Games</Link>
      <Link>About</Link>
    </Group>
  </Container>
);
