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

  & a {
    margin: 0 4px;
    line-height: 60px;
    cursor: pointer;
    transition: color linear .1s;
    color: white;
  }

  & a.active, a:hover {
    color: #3eafab;
  }
`;
