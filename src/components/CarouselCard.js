import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  /* TODO mobile should be around 70% of the size */
  width: ${props => props.theme.sizes.carouselCardWidth};
  height: ${props => props.theme.sizes.carouselCardHeight};
  margin: 0 12px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.carouselCardBG};
  background-image: url(${props => props.imageSrc});
  background-size: cover;
  cursor: pointer;
`;

export default withRouter((props) => {
  const clickCardHander = () => {
    props.history.push(props.content.route);
  }

  return <Container imageSrc={props.content.thumbnail} onClick={clickCardHander} />;
});
