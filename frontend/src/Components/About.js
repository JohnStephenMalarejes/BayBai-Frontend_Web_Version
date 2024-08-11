import React from 'react';
import styled from 'styled-components';
import AboutImg from '../Assests/about.png'

const AboutSection = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <ImageWrapper>
          <img src={AboutImg} alt="Illustration" />
        </ImageWrapper>
        <TextWrapper>
          <AboutTitle>About</AboutTitle>
          <AboutDescription>
            <span>BaybAI, eBaybayMo Web Version</span> creates a Baybayin translator for the continuity of the Filipino alphabetic culture. An web app that uses machine learning to recognize Baybayin characters and convert them into letters. Capture Baybayin character, and the app converts it instantly.
          </AboutDescription>
        </TextWrapper>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default AboutSection;

const AboutContainer = styled.section`
  padding: 2rem;
  background-color: #8B1B1B;
  display: flex;
  justify-content: center;
  height:100vh;
  color: white;
  text-align: left;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding-right: 2rem;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const TextWrapper = styled.div`
  flex: 2;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  font-family: 'Poppins';
  margin-bottom: 1rem;
`;

const AboutDescription = styled.p`
  font-size: 1.5rem;
  font-family: 'Poppins';
  line-height: 1.6;

  span {
    font-weight: bold;
    font-style: italic;
  }
`;

