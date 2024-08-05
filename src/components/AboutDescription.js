import React from "react";
import styled from "styled-components";

export default () => (
  <Container>
    <Inner>
      <Text>
        Hello <span class="wave">👋</span>! My name is Joey, and I'm a Dutch
        frontend web developer living in Barcelona, Spain. I have been coding as
        a hobby for many years, and in 2018, I officially joined the development
        industry.
        <br />
        <br />
        Over the years, I have gained extensive experience in developing
        websites using <em>React.js</em>, <em>Node.js</em>, and <em>GraphQl</em>
        . Recently, my focus has shifted towards developing design systems using
        web components, specifically with <em>Stencil.js</em> and <em>Lit</em>.
        <br />
        <br />
        With a passion for clean and efficient code, I strive to create
        user-friendly and visually appealing web applications. I believe in
        continuous learning and staying up-to-date with the latest technologies
        and best practices in the industry.
      </Text>
    </Inner>
  </Container>
);
const Container = styled.div`
  width: 50%;
  background-color: #585858;
  color: var(--color-text-invert);
  box-sizing: border-box;
  padding: 60px;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #131313;
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
  & em {
    font-weight: normal;
    font-style: normal;
    color: #88af3e;
  }

  & .wave {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
