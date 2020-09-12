import React, { Fragment } from 'react';
import Slider from 'infinite-react-carousel';
import styled from 'styled-components';

import { Project, Title } from '../components';
import { PAGE_DETAILS } from '../constants';

const Container = styled.div`
  width: 100%;
  height: 500px;
`;

export default () => (
  <Fragment>
    <Title>Web Portfolio</Title>
    <Slider dots duration={70}>
      {PAGE_DETAILS.map((project) => {
        return <Project project={project} />;
      })}
    </Slider>
  </Fragment>
);
