import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 12px;

  border: 1px solid grey;
  background-color: inherit;
  transition: all .1s ease-out;

  /* expand the box */
  &:hover {
    width: 200px;
    cursor: pointer;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
`;

const MenuName = styled.span`
  position: absolute;
  padding-left: 12px;
  height: 100%;
  line-height: 60px;
  opacity: 0;
  transition: opacity .3s;

  /* show text when hovered */
  ${Container}:hover & {
    opacity: 1;
  }
`;

const MenuIcon = styled.div`
  position: absolute;
  height: 44px;
  width: 44px;
  margin: 8px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 1;
  transition: opacity .3s;

  /* hide icon when hovered */
  ${Container}:hover & {
    opacity: 0;
  }
`;

const SidebarIcon = (props) => {
  return (
    <Container>
      <MenuName>{props.page.name}</MenuName>
      <MenuIcon src={props.page.icon} />
    </Container>
  );
}

export default SidebarIcon;