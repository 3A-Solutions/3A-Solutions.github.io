import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 0;
  flex: 1 1 0;
  display: flex;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem 0 0;
`;

const Image = styled.div`
  display: inline-block;
  height: 5rem;
  width: 5rem;
  border-radius: 5rem;
  background: gray;
  background: #e4e4e4;
  box-shadow:  7px 7px 14px #ebebeb;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 0.2rem;
`;

const Title = styled.p`
  font-size: 1rem;
  margin: 0 0 0.5rem;
`;

const Description = styled.p`
  font-size: 0.8rem;
  opacity: 0.8;
  margin: 0;
`;

const Person = ({ name, title, image, description }) => (
  <Container>
    <Block>
      <Image src={image}></Image>
    </Block>
    <Block>
      <div>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Block>
  </Container>
);

export default Person;
