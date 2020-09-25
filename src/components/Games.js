import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Title, GifPreview } from '../components';

export default () =>  (
  <Fragment>
    <Title>Game Portfolio</Title>
    <Text>
      As a hobby I am also creating games while experimenting with different engines. I have tried using Python with Pygame, Unreal Engine, Phaser (javascript) and Unity.
      Using Unity is a lot of fun, and writing in C# is an exciting challenge that keeps me going!
    </Text>
    <GameGrid>
      <GifPreview name={'helda'} />
      <GifPreview name={'platform'} />
      <GifPreview name={'defender'} />
      <GifPreview name={'football'} />
    </GameGrid>
  </Fragment>
);

const Text = styled.p`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
`;

const GameGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 940px;
  margin: 0 auto 80px;
`;
