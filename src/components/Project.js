import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { CrossfadeImage } from '../components';

export default (props) => {
  const [idx, setIdx] = useState(0);
  const totalImages = props.project.thumbnails.length;

  const changeIdx = () => {
    setIdx(idx + 1 === totalImages ? 0 : idx + 1);
  };

  useEffect(() => {
    if(props.currSlide === props.slideNo) {
      setTimeout(() => {
        changeIdx();
      }, 4000);
    }
  }, [idx, props.currSlide]);

  return (
    <Container>
      <ProjectDetails >
        <p>{props.project.name}</p>
        <p>{props.project.subtitle}</p>
        <p>{props.project.description}</p>
        <p>{props.project.description2}</p>
        <p>{props.project.description3}</p>
        <Link href={props.project.url} target={"_blank"} rel={"nofollow"}>Visit the website</Link>
      </ProjectDetails>
      <ImageContainer image={props.project.thumbnail}>
        {/* <CrossfadeImage src={props.project.thumbnails[idx]} alt={props.project.name}/> */}
        <img src={props.project.thumbnails[0]} alt={`${props.project.name} - thumbnail`}/>
      </ImageContainer>
    </Container>
  )
};

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 40px;

  @media (max-width: 768px) {
    flex-flow: column;
    padding: 0;
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

  & p:nth-of-type(2) {
    font-size: 18px;
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
    box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
  }

  @media (max-width: 768px) {
    padding: 10px 50px;
    width: 100%;
  }
`;

const Link = styled.a`
  color: #88af3e;
  font-weight: 600;
`;
