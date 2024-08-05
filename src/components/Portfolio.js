import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'infinite-react-carousel';
import { arrowleft, arrowright } from '../icons';

import { Project, Title } from '../components';
import { PAGE_DETAILS } from '../constants';

export default () => {
  const [currSlide, setCurrSlide] = useState(0);

  const handleSlide = (idx) => {
    setCurrSlide(idx);
  };

  return (
    <div id="portfolio">
      <Title>Portfolio</Title>
      <Container>
        <Slider
          dots
          duration={70}
          prevArrow={<Arrow src={arrowleft} alt={''}  />}
          nextArrow={<Arrow src={arrowright}  alt={''} /> }
          afterChange={handleSlide}
        >
          {PAGE_DETAILS.map((project, index) => {
            return <Project key={project.name} project={project} slideNo={index} currSlide={currSlide}/>;
          })}
        </Slider>
      </Container>
    </div>
  );
}

const Container = styled.div`
  padding: 40px 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0;
  }

  /* this is targeting the inner styling of the carousel */
  & div div {
    overflow: visible;
  }

  & .carousel-dots button::before {
    color: #88af3e !important;
    opacity: .3 !important;
  }

  & .carousel-dots-active button::before {
    color: #88af3e !important;
    opacity: 1 !important;
  }
`;

const Arrow = styled.img`
  -webkit-tap-highlight-color: transparent;
  width: 60px;

  @media (max-width: 768px) {
    width: 40px;
  }
`;
