import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';

export default () => (
  <Container>
    <Scroll.Link
      to={"about"}
      spy={true}
      smooth={true}
      duration={800}
      activeClass={'active'}
    >ABOUT</Scroll.Link>
    <Scroll.Link
      to={"skills"}
      spy={true}
      smooth={true}
      duration={800}
      activeClass={'active'}
    >SKILLS</Scroll.Link>
    <Scroll.Link
      to={"portfolio"}
      spy={true}
      smooth={true}
      duration={800}
      activeClass={'active'}
    >PORTFOLIO</Scroll.Link>
  </Container>
);

const Container = styled.div`
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
    color: white;
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
