import React, { Fragment, useState } from 'react';
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
    <Fragment>
      <Title>Web Portfolio</Title>
      <Slider
        dots
        duration={70}
        prevArrow={<img src={arrowleft} />}
        nextArrow={<img src={arrowright} />}
        afterChange={handleSlide}
      >
        {PAGE_DETAILS.map((project, index) => {
          return <Project project={project} slideNo={index} currSlide={currSlide}/>;
        })}
      </Slider>
    </Fragment>
  );
}
