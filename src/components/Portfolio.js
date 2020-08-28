import React from 'react';
import Slider from 'infinite-react-carousel';
import styled from 'styled-components';

import { Project } from '../components';
import { PAGE_DETAILS } from '../constants';

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

export default () => (
  // TODO: create custom dots and put on top. Maybe use logo's instead of dots
  <Slider dots duration={70}>
    {PAGE_DETAILS.map((project) => {
      return <Project project={project} />;
    })}
  </Slider>
);
