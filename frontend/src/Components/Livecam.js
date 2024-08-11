import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Livecam = () => {
  const videoRef = useRef(null);
  const [result, setResult] = useState(''); 

  useEffect(() => {

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing the camera', error);
      });

    const captureInterval = setInterval(() => {
      captureImage();
    }, 5000); 

    return () => {
      clearInterval(captureInterval);
    };
  }, []);

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      const formData = new FormData();
      formData.append('baybayin_photo', blob, 'captured.png');
   
      axios.post('https://63bc-212-102-51-243.ngrok-free.app/check_image', formData)
        .then((response) => {
          console.log('Image uploaded successfully:', response.data);
          setResult(response.data); 
        })
        .catch((error) => {
          console.error('Error uploading the image:', error);
          setResult('Error uploading the image');
        });
    }, 'image/png');
  };

  return (
    <Container>
      <TopDiv>
        <Video ref={videoRef} autoPlay playsInline />
      </TopDiv>
      <Label>Transliterate</Label>
      <BottomDiv>
        <BottomContent>{result ? result : 'Waiting for result...'}</BottomContent> 
      </BottomDiv>
    </Container>
  );
};

export default Livecam;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
`;

const TopDiv = styled.div`
  width: 80%;
  height: 250px;
  border: 2px solid #A52A2A;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Label = styled.div`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: #A52A2A;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  text-align: center;
`;

const BottomDiv = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid #A52A2A;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomContent = styled.div`
  font-size: 2rem;
  color: #000;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;
