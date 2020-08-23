import React, { useState } from 'react';
import styled from 'styled-components';

import useWindowDimensions from '../utils/useWindowDimensions';
import { CarouselCard, NavigateButton } from '../components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.theme.sizes.carouselCardHeight};
  padding: 60px 0 40px;
  overflow-x: hidden;
`;

const Slider = styled.div`
  position: absolute;
  height: inherit;
  min-width: 100%;
  display: flex;
  justify-content: center;
  transform: translateX(${props => props.translatex}px);
  transition: transform .3s ease-out;
`;

export default (props) => {
  const [sliderOffset, setSliderOffset] = useState(0);
  const { width } = useWindowDimensions();

  console.log('width: ', width);
  // TODO calculate width of page to determine max slide distance in for sliderOffset
  // also to hide the scroll buttons

  const carouselCards = props.content.map((content, idx) => {
    return <CarouselCard key={content.name + idx} content={content} />
  });

  const handleNavigate = (direction) => {
    const newOffset = direction == 'left' ? sliderOffset + 500 : sliderOffset - 500;
    setSliderOffset(newOffset);
  }

  return (
    <Container>
      <Slider translatex={sliderOffset}>
        {carouselCards}
      </Slider>
      <NavigateButton navigate={handleNavigate} direction={'left'} />
      <NavigateButton navigate={handleNavigate} direction={'right'} />
    </Container>
  )
};
