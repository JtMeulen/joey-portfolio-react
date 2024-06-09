import React from 'react';
import styled from 'styled-components';

import { AboutDescription, AboutContact } from '../components';

export default () => (
  <Container id="about">
    <AboutDescription />
    <AboutContact />
  </Container>
);

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;

  @media (max-width: 768px) {
    flex-flow: column;
  }
`;
