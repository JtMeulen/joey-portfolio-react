import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 4;
  min-height: ${props => props.theme.sizes.about_height};
  background-color: ${props => props.theme.colors.about_description_bg};
  color: ${props => props.theme.colors.font_white};
`;

export default () => (
  <Container>
    description
  </Container>
);
