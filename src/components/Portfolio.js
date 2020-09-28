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
        prevArrow={<img src={arrowleft} alt={''} style={{'-webkit-tap-highlight-color': 'transparent' }} />}
        nextArrow={<img src={arrowright}  alt={''} style={{'-webkit-tap-highlight-color': 'transparent' }} /> }
        afterChange={handleSlide}
      >
        {PAGE_DETAILS.map((project, index) => {
          return <Project key={project.name} project={project} slideNo={index} currSlide={currSlide}/>;
        })}
      </Slider>
    </Fragment>
  );
}
