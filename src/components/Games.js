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
      <GifPreview id={'helda'} img={'https://i.imgur.com/DJe58pf.png'} gif={'https://i.imgur.com/6Pczf3A.gif'} />
      <GifPreview id={'platform'} img={'https://i.imgur.com/e5UrwFG.png'} gif={'https://i.imgur.com/B06JRTt.gif'}/>
      <GifPreview id={'defender'} img={'https://i.imgur.com/AnXteVr.png'} gif={'https://i.imgur.com/2ITxEV3.gif'}/>
      <GifPreview id={'football'} img={'https://i.imgur.com/wOmrAFZ.png'} gif={'https://i.imgur.com/FLvKeTu.gif'}/>
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
