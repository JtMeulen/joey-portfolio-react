import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  background-color: ${props => props.theme.colors.about_description_bg};
  color: ${props => props.theme.colors.font_white};
  box-sizing: border-box;
  padding: 20px 40px 40px;

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

const Title = styled.p`
  margin: 0 0 10px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 44px;
  text-decoration: underline;
`;

export default () => (
  <Container>
    <Inner>
      <Title>About me</Title>
      <Text>
        Hello! I am Joey, a 31-year-old frontend web developer from Amsterdam, the Netherlands.
        In 2017 I discovered coding and after extensive home studies, I officially joined the development industry
        at the start of 2018. I have since been professionally developing websites, focusing on R​eact.js, Node.js and GraphQl​.
        <br />
        With 3 years of working experience, React.js is my main strength - but in my spare time, Unity and C# take over.
        Coding games is just as fun!
      </Text>
      <Text>
        I will soon be moving to Barcelona after living in Stockholm, Sweden for the past four years.
        I’m looking for a fresh new challenge at a company that champions their team spirit as much as their product.​
        <br />
        I enjoy working with other crafts, collaborating daily with UI/UX, QA and backend developers.
        <br />
        I’m always open to feedback and new ideas and can handle stress very well. I am organised,
        make quick decisions and I can lead a group when I need to.
      </Text>
    </Inner>
  </Container>
);
