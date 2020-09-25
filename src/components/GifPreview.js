import React, { useState } from 'react';
import styled from 'styled-components';

export default (props) => {
  const [gif, setGif] = useState(false);

  const showGif = () => {
    setGif(true);
  }

  const hideGif = () => {
    setGif(false);
  }

  return (
    <Container>
      <Image onMouseEnter={showGif} onMouseOut={hideGif} src={`/assets/games/${props.name}.${gif ? 'gif' : 'png'}`}/>
    </Container>
  )
};

const Container = styled.div`
  margin: 30px 15px 0;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
`;
