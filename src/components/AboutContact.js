import React from 'react';
import styled from 'styled-components';
import { github, linkedin } from '../icons';

const Container = styled.div`
  width: 50%;
  background-color: #3eafab;
  color: white;
  box-sizing: border-box;
  padding: 60px;

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

const Download = styled.a`
  color: pink;
  font-weight: 500;
  transition: color .2s linear;

  &:hover {
    color: red;
  }
`

const IconLink = styled.a`
  margin-right: 10px;
  font-size: 40px;
  opacity: 1;
  transition: opacity .2s linear;

  & img {
    width: 40px;
  }

  &:hover,
  &.active {
    opacity: .8;
    color: lightgrey;
  }
`

export default () => (
  <Container>
    <Inner>
      <Text>
        You can find most of my work on Github. Feel free to connect with me on LinkedIn, or&nbsp;
        <Download download="cv_joey_ter_meulen.pdf" href="/files/cv.pdf" title="ImageName">
          click here
        </Download>
        &nbsp;to download my CV directly.
      </Text>
      <IconLink href={"https://linkedin.com/in/joey-ter-meulen-205365120"} target={"_blank"} rel={"nofollow"}>
        <img src={linkedin} alt={"linkedin"}/>
      </IconLink>
      <IconLink href={"https://github.com/JtMeulen"} target={"_blank"} rel={"nofollow"}>
        <img src={github} alt={"github"}/>
      </IconLink>
    </Inner>
  </Container>
);
