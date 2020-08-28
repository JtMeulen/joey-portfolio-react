import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* TODO define height and put in theme folder */
  width: 100%;
  height: 600px;
  display: flex;
  background-color: ${props => props.color};

  @media (max-width: 768px) {
    flex-flow: column;
    height: 300px;
  }
`;

const ProjectDetails = styled.div`
  flex-grow: 2;
  height: 100%;
  background-color: ${props => props.theme.colors.light_overlay};
`;

const Image = styled.div`
  flex-grow: 4;
  height: 100%;
  background-image: url(${props => props.image});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;


export default (props) => (
  <Container color={props.project.background_color}>
    <ProjectDetails >
      <p>{props.project.name}</p>
      <a href={props.project.url} target={"_blank"}>See the project</a>
    </ProjectDetails>
    <Image image={props.project.thumbnail} />
  </Container>
);
