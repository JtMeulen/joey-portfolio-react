import React from 'react';
import styled from 'styled-components';
import { git, javascript,react, redux, nodejs, css, html, csharp, jquery, mongodb, unity, graphql } from '../icons';

const GRID_ITEMS = [
  {name: 'JavaScript', icon: javascript},
  {name: 'React', icon: react},
  {name: 'Redux', icon: redux},
  {name: 'NodeJs', icon: nodejs},
  {name: 'GraphQL', icon: graphql},
  {name: 'jQuery', icon: jquery},
  {name: 'MongoDB', icon: mongodb},
  {name: 'CSS3', icon: css},
  {name: 'HTML5', icon: html},
  {name: 'Git/Github', icon: git},
  {name: 'Unity', icon: unity},
  {name: 'C#', icon: csharp}
];

const Container = styled.div`
  width: 100%;
`;

const Title = styled.p`
  margin: 20px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 44px;
  text-align: center;
  text-decoration: underline;
`;

const Grid = styled.div`
  display: grid;
  max-width: 400px;
  margin: 0 auto 20px;
  grid-template-columns: auto auto auto auto;
`;

const GridItem = styled.div`
  display: flex;
  padding: 20px 10px;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 60px;
    margin-bottom: 8px;
  }

  & span {
    font-size: 16px;
  }
`;

const renderGridItems = () => {
  return GRID_ITEMS.map((i) => {
    return (
      <GridItem key={i.name}>
        <img src={i.icon} />
        <span>{i.name}</span>
      </GridItem>
    );
  })
}

export default () => (
  <Container>
    <Title>Stack that I work with</Title>
    <Grid>
      {renderGridItems()}
    </Grid>
  </Container>
);
