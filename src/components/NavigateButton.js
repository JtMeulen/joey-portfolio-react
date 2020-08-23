
import React, { useState } from 'react';
import styled from 'styled-components';

const NavigateButton = styled.div`
  position: absolute;
  top: calc(50% - 10px);
  left: ${props => props.direction === 'left' ? 0 : 'none'};
  right: ${props => props.direction === 'right' ? 0 : 'none'};
  width: 20px;
  height: 20px;
  background-color: blue;
  cursor: pointer;
`;

export default (props) => <NavigateButton onClick={() => props.navigate(props.direction)} direction={props.direction} />;
