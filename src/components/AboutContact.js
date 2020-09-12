import React from 'react';
import styled from 'styled-components';

// TODO fix colors and and add to defaults

const Container = styled.div`
  width: 50%;
  background-color: ${props => props.theme.colors.about_contact_bg};
  color: ${props => props.theme.colors.font_white};
  box-sizing: border-box;
  padding: 20px 40px 40px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Inner = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Text = styled.p`
  margin: 8px 0;
`;

const Title = styled.p`
  margin: 0 0 10px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 44px;
  text-decoration: underline;
`;

const Download = styled.a`
  color: pink;
  font-weight: 500;

  &:hover {
    color: red;
  }
`

export default () => (
  <Container>
    <Inner>
      <Title>Contact</Title>
      <Text>
        You can find most of my work on Github. Feel free to connect with me on LinkedIn, or&nbsp;
        <Download download="cv_joey_ter_meulen.pdf" href="/files/cv.pdf" title="ImageName">
          click here
        </Download>
        &nbsp;to download my CV directly.
      </Text>
    </Inner>
  </Container>
);
