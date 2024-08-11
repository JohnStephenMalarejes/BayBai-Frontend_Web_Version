import React from 'react';
import styled from 'styled-components';
import { IoVideocamOutline, IoCloudUploadOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";

const Sidebar = ({ onSelect }) => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <LogoText>BaybAI</LogoText>
      </LogoContainer>
      <NavItems>
        <NavItem onClick={() => onSelect('Livecam')}>
          <IoVideocamOutline className="icon" /> Livecam
        </NavItem>
        <NavItem onClick={() => onSelect('Upload')}>
          <IoCloudUploadOutline className="icon" /> Upload
        </NavItem>
        <NavItem onClick={() => onSelect('History')}>
          <MdHistory className="icon" /> History
        </NavItem>
      </NavItems>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  height: 100vh;
  width: 200px;
  background-color: #A52A2A;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LogoContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex; 
  justify-content: center;
  border-bottom: 4px solid #ffffff;
`;

const LogoText = styled.h1`
  font-family: 'Poppins';
  font-size: 2rem;
  color: #ffffff;
  font-weight: 800;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-family: 'Poppins';
  font-size: 1rem;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #ffffff;
    color: #A52A2A;
    border-radius: 25px;
  }

  .icon {
    margin-right: 10px;
    font-size: 1.5rem; 
  }
`;
