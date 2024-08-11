import React, { useState } from 'react';
import styled from 'styled-components';
import LoginModal from './Login';

const Navbar = ({ scrollToSection, refs }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <NavbarContainer>
        <Logo>BaybAI</Logo>
        <NavLinks>
          <NavLink onClick={() => scrollToSection(refs.heroRef)}>Home</NavLink>
          <NavLink onClick={() => scrollToSection(refs.pricingRef)}>Pricing</NavLink>
          <NavLink onClick={() => scrollToSection(refs.aboutRef)}>About</NavLink>
          <ButtonContainer>
            <LoginButton onClick={toggleModal}>Login</LoginButton>
          </ButtonContainer>
        </NavLinks>
        <LoginModal isOpen={isModalOpen} toggleModal={toggleModal} />
      </NavbarContainer>
    );
  };
  
  export default Navbar;

const NavbarContainer = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  top: 0;
  left: 0;
  color: #fff;
  font-family: 'Poppins';
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  padding: 1rem;
  margin-left: 2rem;
  color: #A52A2A;
  font-size: 1.5rem;
  font-weight: 800;
  font-style: italic;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  padding: 1rem;
  margin-right: 2rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    background-color: #333; 
  }
`;

const NavLink = styled.div`
  cursor: pointer;
  color: #000000;
  text-decoration: none;
  padding: 1rem;
  border-radius: 25px;
  transition: background-color 0.3s ease, color 0.3s ease;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    width: 0;
    height: 2px;
    background-color:  #A52A2A;
    transition: width 0.3s ease;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }

  &:hover::before {
    width: 50%;
    left: 0;
  }

  &:hover::after {
    width: 50%;
    right: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: center;
`;

const LoginButton = styled.button`
  background-color: #ffffff; 
  color: #A52A2A;
  border: 3px solid #A52A2A;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Poppins';
  width: 100px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #A52A2A; 
    color: #ffffff;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
