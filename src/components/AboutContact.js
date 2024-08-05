import React from 'react';
import styled from 'styled-components';
import { github, linkedin } from '../icons';

export default () => (
  <Container>
    <Inner>
      <Text>
        Date of birth: 16/02/1989
      </Text>
      <Text>
        Email: <a href="mailto:joeytermeulen@gmail.com">joeytermeulen@gmail.com</a>
      </Text>
      <Text>
        Location: Barcelona, Spain
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

const Container = styled.div`
  width: 50%;
  background-color: #868686;
  color: var(--color-text-invert);
  box-sizing: border-box;
  padding: 60px;
  display:flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1c1c1c;
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

  & a {
    color: var(--color-text-invert);
    text-decoration: none;
    transition: color .2s linear;
  }
`;

const IconLink = styled.a`
  margin-right: 10px;
  line-height: 80px;
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
`;
