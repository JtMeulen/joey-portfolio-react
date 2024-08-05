import React from "react";
import styled from "styled-components";
import { Title } from "../components";
import {
  git,
  javascript,
  react,
  redux,
  nodejs,
  css,
  html,
  mongodb,
  graphql,
  nextjs,
  lit,
  stencil,
} from "../icons";

const GRID_ITEMS = [
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "NextJs", icon: nextjs },
  { name: "Lit", icon: lit },
  { name: "StencilJs", icon: stencil },
  { name: "Redux", icon: redux },
  { name: "NodeJs", icon: nodejs },
  { name: "GraphQL", icon: graphql },
  { name: "MongoDB", icon: mongodb },
  { name: "CSS3", icon: css },
  { name: "HTML5", icon: html },
  { name: "Git/Github", icon: git },
];

const renderGridItems = () => {
  return GRID_ITEMS.map((i) => {
    return (
      <GridItem key={i.name}>
        <img src={i.icon} alt={i.name} id={i.name} />
        <span>{i.name}</span>
      </GridItem>
    );
  });
};

export default () => (
  <Container id="skills">
    <Title>Tech Stack</Title>
    <Grid>{renderGridItems()}</Grid>
  </Container>
);

const Container = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  max-width: 400px;
  margin: 80px auto;
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
    height: 60px;
    margin-bottom: 8px;
  }

  & span {
    font-size: 16px;
  }

  @media (prefers-color-scheme: dark) {
    #NextJs, #StencilJs {
      filter: invert(1);
    }
  }
`;
