import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; 
import Facebook from '../Assests/facebookicon.svg';
import Google from '../Assests/googleicon.svg';
import Logo from '../Assests/logo.png';
import RegisterModal from './Register';

const LoginModal = ({ isOpen, toggleModal }) => {
  const [showLogin, setShowLogin] = useState(true); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    const dummyUsername = 'admin';
    const dummyPassword = 'password123';

    if (username === dummyUsername && password === dummyPassword) {
      navigate('/Dashboard'); 
    } else {
      setError('Invalid username or password');
    }
  };

  if (!isOpen) return null;

  const openSignUpModal = () => {
    setShowLogin(false); 
  };

  const openLoginModal = () => {
    setShowLogin(true); 
  };

  return (
    <>
      {showLogin ? (
        <Modal>
          <ModalContent>
            <LeftContainer>
              <SignInForm onSubmit={handleLogin}>
                <FormLabel>Sign in to your account</FormLabel>
                {error && <ErrorText>{error}</ErrorText>}
                <FormField>
                  <InputLabel>Username</InputLabel>
                  <Input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormField>
                <FormField>
                  <InputLabel>Password</InputLabel>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormField>
                <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
                <SubmitButton type="submit">Sign In</SubmitButton>
                <OtherWaysToSignIn>
                  <OtherWaysText>Other ways to sign in</OtherWaysText>
                  <IconsContainer>
                    <IconLink href="#">
                      <Icon src={Facebook} alt="Facebook" />
                    </IconLink>
                    <IconLink href="#">
                      <Icon src={Google} alt="Google" />
                    </IconLink>
                  </IconsContainer>
                </OtherWaysToSignIn>
                <SignUpPrompt>
                  Don’t have an account?{' '}
                  <SignUpLink onClick={openSignUpModal}>Create Account</SignUpLink>
                </SignUpPrompt>
              </SignInForm>
            </LeftContainer>
            <RightContainer>
              <CloseButton onClick={toggleModal}>&times;</CloseButton>
              <LogoContainer>
                <LogoImage src={Logo} alt="Logo" />
                <LogoText>BaybAI</LogoText>
              </LogoContainer>
            </RightContainer>
          </ModalContent>
        </Modal>
      ) : (
        <RegisterModal isOpen={true} openLoginModal={openLoginModal} />
      )}
    </>
  );
};

export default LoginModal;

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 800px;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center horizontally */
  width: 50%;
  padding: 20px;
  background-color: #ffffff;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #a52a2a;
  color: white;
  padding: 20px;
  border-radius: 25px 0 0 25px;
  position: relative; 
`;

const CloseButton = styled.span`
  position: absolute; 
  top: 0;
  right: 20px;
  cursor: pointer;
  font-size: 2.5rem;
  &:hover {
    color: red;
  }
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 80%;
`;

const FormLabel = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #a52a2a;
`;

const FormField = styled.div`
  margin-bottom: 15px;
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const InputLabel = styled.label`
align-self: flex-start;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #000000;
`;

const Input = styled.input`
  font-family: 'Poppins';
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #C4C4C4;
  font-size: 12px;
  box-sizing: border-box;
`;

const ForgotPasswordLink = styled.a`
  font-weight: bold;
  color: #757575;
  text-decoration: none;
  font-size: 12px;
  align-self: flex-end;
  margin-bottom: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  align-self: center;
  width: 100%;
  font-family: 'Poppins';
  padding: 10px;
  background-color: #a52a2a;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 0.8rem;
  &:hover {
    background-color: darkred;
  }
`;

const SignUpPrompt = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 0.7rem;
  color: #333;
  cursor: pointer;
`;

const SignUpLink = styled.a`
  color: #a52a2a;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const OtherWaysToSignIn = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const OtherWaysText = styled.p`
  font-size: 0.7rem;
  color: #757575;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const IconLink = styled.a`
  margin: 0 10px;
  cursor: pointer;
  text-decoration: none;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const LogoContainer = styled.div`
  text-align: center;
`;

const LogoImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 50%;
  border: 2px solid #ffffff
  
`;

const LogoText = styled.p`
font-family: 'Poppins';
font-size: 2rem;
color: #ffffff;
margin-top: 1rem;
font-weight: 800;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

