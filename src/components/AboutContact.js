import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: ${props => props.theme.sizes.about_height};
  background: ${props => props.theme.colors.about_contact_bg};
  color: ${props => props.theme.colors.font_white};
`;

export default () => (
  <Container>
    contact
  </Container>
);
