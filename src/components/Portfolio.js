import React, { Fragment } from 'react';
import Slider from 'infinite-react-carousel';
import { arrowleft, arrowright } from '../icons';

import { Project, Title } from '../components';
import { PAGE_DETAILS } from '../constants';

export default () => (
  <Fragment>
    <Title>Web Portfolio</Title>
    <Slider
      dots
      duration={70}
      prevArrow={<img src={arrowleft} />}
      nextArrow={<img src={arrowright} />}
    >
      {PAGE_DETAILS.map((project, index) => {
        return <Project project={project} slideNo={index} />;
      })}
    </Slider>
  </Fragment>
);
