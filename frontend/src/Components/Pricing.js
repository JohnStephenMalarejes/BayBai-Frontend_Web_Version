import React from 'react';
import styled from 'styled-components';

const PricingSection = () => {
  return (
    <PricingContainer>
      <PricingTitle>Pricing</PricingTitle>
      <PricingCards>
        <Card>
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardPrice>P0 month</CardPrice>
          </CardHeader>
          <CardFeatureList>
            <CardFeature>Individual character Recognition</CardFeature>
          </CardFeatureList>
          <ButtonContainer>
          <CardButton disabled>Current Plan</CardButton>
          </ButtonContainer>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Premium</CardTitle>
            <CardPrice>P289 for 1 month</CardPrice>
          </CardHeader>
          <CardFeatureList>
            <CardFeature>Complete Word Recognition</CardFeature>
          </CardFeatureList>
          <ButtonContainer>
          <CardButton>Get Premium</CardButton>
          </ButtonContainer>
        </Card>
      </PricingCards>
    </PricingContainer>
  );
};

export default PricingSection;

const PricingContainer = styled.section`
  padding: 1rem;
  text-align: center;
  height: 100vh;
`;

const PricingTitle = styled.h2`
font-weight: bold;
font-family: 'Poppins';
  font-size: 2rem;
  color: #A52A2A;
  margin-bottom: 3rem;
`;

const PricingCards = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Card = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  width: 300px;
  height: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
`;

const CardHeader = styled.div`
  font-family: 'Poppins';
  background-color: #A52A2A;
  color: white;
  padding: 1rem;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: Light;
  margin: 0;
`;

const CardPrice = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

const CardFeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  flex-grow: 1; 
`;

const CardFeature = styled.li`
font-family: 'Poppins';
  font-size: 1rem;
  color: #000000;
  margin-bottom: 1rem;
`;
const ButtonContainer = styled.div `
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
`

const CardButton = styled.button`
font-family: 'Poppins';
  background-color: ${({ disabled }) => (disabled ? '#D3D3D3' : '#8B1B1B')};
  color: ${({ disabled }) => (disabled ? '#A9A9A9' : 'white')};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: 1rem;
  transition: background-color 0.3s;
  width: 90%;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#D3D3D3' : '#6E0C0C')};
  }
`;
