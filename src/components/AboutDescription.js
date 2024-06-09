import React from "react";
import styled from "styled-components";

import { getYearsSince } from "../utils/getYearsSince";

export default () => (
  <Container>
    <Inner>
      <Text>
        Hello! I am Joey, a {getYearsSince("1989-02-16")}-year-old frontend web
        developer from Amsterdam, the Netherlands.
        <br />
        <br />
        After having coded at home as a hobby for a while, I officially joined
        the development industry at the start of 2018. I have since been
        developing websites professionally, focusing on ReactJs, Node.js and
        GraphQl​.
        <br />
        <br />
        With over {getYearsSince("2018-01-01")} years of working experience, my
        main focus has shifted towards developing design systems using web
        components. React.js continues to be a significant part of my work.
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
