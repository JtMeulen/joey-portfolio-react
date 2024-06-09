import React from 'react';
import styled from 'styled-components';

export default () => (
  <Container>
    <a href="#about">ABOUT</a>
    <a href="#skills">SKILLS</a>
    <a href="#portfolio">PORTFOLIO</a>
  </Container>
);

const Container = styled.nav`
  position: sticky;
  display: flex;
  z-index: 20;
  justify-content: center;
  top: 0;
  margin-top: -60px;
  height: 60px;
  width: 100%;
  background-color: rgba(52,52,52,0.7);
  font-size: 24px;
  font-weight: 600;
  line-height: 60px;

  & a {
    margin: 0 12px;
    cursor: pointer;
    transition: color linear .1s;
    color: var(--color-text-invert);
    text-decoration: none;
  }

  & a.active, a:hover {
    color: #88af3e;
  }

  @media (max-width: 768px) {
    & a {
      font-size: 16px;
    }
  }
`;
