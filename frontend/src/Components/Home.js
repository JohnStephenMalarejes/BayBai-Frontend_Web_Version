import React from 'react';
import styled from 'styled-components';
import Logo from '../Assests/logo.png'
const HeroSection = () => {
  return (
    <HeroContainer>
      <LeftSection>
        <HeroContent>
          <HeroSubtitle>An app that uses machine learning to recognize Baybayin characters and convert them into letters.</HeroSubtitle>
          <HeroButton>Recognize</HeroButton>
        </HeroContent>
      </LeftSection>
      <RightSection>
        <ImageContainer>
          <StyledImage src={Logo} alt="BaybAI" />
          <LogoText>BaybAI</LogoText>
        </ImageContainer>
      </RightSection>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.section`
  display: flex;
  height: 100vh;
  padding-top: 80px; 
`;

const LeftSection = styled.div`
  flex: 1;
  background-color: #8B1B1B;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const HeroContent = styled.div`
font-family: 'Poppins';
  color: white;
  max-width: 500px;
  padding: 2rem;
  margin-left: 1rem;
`;

const HeroSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.button`
font-family: 'Poppins';
  background-color: white;
  color: #A52A2A;
  border: none;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #D3D3D3;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid #8B1B1B;
`;

const LogoText = styled.h3`
  font-family: 'Poppins';
  font-size: 3rem;
  color: #8B1B1B;
  margin-top: 1rem;
  font-weight: 800;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

