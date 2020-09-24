import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';

const Container = styled.div`
  position: sticky;
  display: flex;
  z-index: 20;
  justify-content: center;
  top: 0;
  margin-top: -60px;
  height: 60px;
  width: 100%;
  background-color: rgba(240,240,240,0.7);

  & a {
    margin: 0 4px;
    line-height: 60px;
    cursor: pointer;
    transition: color linear .1s;
    text-shadow: 0px 0px 4px grey;
    color: white;
  }

  & a.active, a:hover {
    color: #3eafab;
  }
`;

// TODO fix or remove active class for final element on page
export default () => (
  <Container>
    {/* <Scroll.Link
      to={"header"}
      smooth={true}
      duration={800}
    >Back to top</Scroll.Link> */}
    <Scroll.Link
      to={"about"}
      spy={true}
      smooth={true}
      duration={800}
      activeClass={'active'}
    >About</Scroll.Link>
    <Scroll.Link
      to={"skills"}
      spy={true}
      smooth={true}
      duration={800}
      activeClass={'active'}
    >Skills</Scroll.Link>
    <Scroll.Link
      to={"portfolio"}
      spy={true}
      smooth={true}
      duration={800}
      activeClass={'active'}
    >Portfolio</Scroll.Link>
  </Container>
);
