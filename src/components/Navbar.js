import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: sticky;
  top: 0;
  margin-top: -60px;
  height: 60px;
  width: 100%;
  background-color: rgba(240,240,240,0.7);
`;

export default () => (
  <Container>
    <a href="#footer">Navvbaarrr</a>
  </Container>
);
