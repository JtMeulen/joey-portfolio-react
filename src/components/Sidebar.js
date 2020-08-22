import React from 'react';
import styled from 'styled-components';

import { SidebarIcon } from '../components';
import { PAGES } from '../constants';

const Container = styled.div`
  width: 60px;
  height: 100%;

  background-color: #151617;
  box-shadow: -6px 0px 12px 0px #a2a2a2;

  display: flex;
  flex-flow: column;
`;

const Sidebar = () => {
  const icons = PAGES.map((page) => {
    return <SidebarIcon key={page.name} page={page} />;
  })

  return (
    <Container>
      {icons}
    </Container>
  );
}

export default Sidebar;