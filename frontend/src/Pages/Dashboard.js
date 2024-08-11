import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar';
import Livecam from '../Components/Livecam';
import History from '../Components/History';
import Upload from '../Components/Upload';

const Dashboard = () => {
  const [selectedContent, setSelectedContent] = useState('Livecam'); 

  const renderContent = () => {
    switch (selectedContent) {
      case 'Livecam':
        return <Livecam />;
      case 'Upload':
        return <Upload />;
      case 'History':
        return <History />;
      default:
        return <Livecam />;
    }
  };

  return (
    <DashboardContainer>
      <Sidebar onSelect={setSelectedContent} />
      <Content>
        {renderContent()}
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
overflow-x: hidden;
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;


