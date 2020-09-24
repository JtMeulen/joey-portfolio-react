import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default (props) => {
  const [idx, setIdx] = useState(0);
  const totalImages = props.project.thumbnails.length;
  let timeout;

  const changeIdx = () => {
    clearTimeout(timeout);
    setIdx(idx + 1 === totalImages ? 0 : idx + 1);
  };

  useEffect(() => {
    timeout = setTimeout(() => {
      changeIdx();
    }, 3000);
  }, [idx]);

  return (
    <Container>
      <ProjectDetails >
        <p>{props.project.name}</p>
        <p>{props.project.description}</p>
        <p>{props.project.description2}</p>
        <Link href={props.project.url} target={"_blank"} rel={"nofollow"}>See the project</Link>
      </ProjectDetails>
      <ImageContainer image={props.project.thumbnail}>
        <img src={props.project.thumbnails[idx]} onClick={changeIdx} />
      </ImageContainer>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    flex-flow: column;
  }
`;

const ProjectDetails = styled.div`
  width: 40%;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  padding: 60px;

  & p:first-of-type {
    font-size: 24px;
    margin: 0;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    padding: 20px 50px 10px;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 60%;
  box-sizing: border-box;
  padding: 60px;

  & img {
    width: 100%;
    border-radius: 20px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 10px 50px;
    width: 100%;
  }
`;

const Link = styled.a`
  color: #4ac2be;

  &:visited, :hover, :active {
    color: #3eafab;
  }
`;
