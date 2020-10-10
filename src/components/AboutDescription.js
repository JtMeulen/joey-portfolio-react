import React from 'react';
import styled from 'styled-components';

export default () => (
  <Container>
    <Inner>
      <Text>
        Hello! I am Joey, a 31-year-old frontend web developer from Amsterdam, the Netherlands.<br /><br />
        After having coded at home as a hobby for a while, I officially joined the development industry
        at the start of 2018. I have since been developing websites professionally, focusing on R​eact.js, Node.js and GraphQl​.
        <br /><br />
        With 3 years of working experience, React.js is my main strength - but in my spare time, Unity and C# take over.
        Coding games is just as fun!
      </Text>
    </Inner>
  </Container>
);

const Container = styled.div`
  width: 50%;
  background-color: #4ac2be;
  color: white;
  box-sizing: border-box;
  padding: 60px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Inner = styled.div`
  max-width: 500px;
  margin-left: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
  }
`;

const Text = styled.p`
  margin: 8px 0;
`;
