import React from 'react';
import {
  StContainer,
  StLogoImg,
  StLogoName,
  StLogoWrapper,
  StCloseBtn,
  StBackground
} from './styles/Login.style';

import logoImg from '../../assets/logoImg.png';
import Login from './Login';

// import pwCheck2 from '../../../shared/pwCheck2.jpg';

const Modal = ({ isOpen, onModalHandler }) => {
  return (
    <StBackground $isOpen={isOpen}>
      <StContainer>
        <StCloseBtn onClick={onModalHandler}>x</StCloseBtn>
        <StLogoWrapper>
          <StLogoImg src={logoImg} alt='로고이미지' />
          <StLogoName>Travel Vibe</StLogoName>
        </StLogoWrapper>
        <Login />
      </StContainer>
    </StBackground>
  );
};

export default Modal;
