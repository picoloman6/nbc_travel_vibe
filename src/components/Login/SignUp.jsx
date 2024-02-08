import React from 'react';
import {
  StCheckBox,
  StIdPwWrapper,
  StLoginBtn,
  StLoginInput,
  StLoginTitle,
  StLoginWrapper,
  StMemoInfo,
  StMemoWrapper,
  StSignUp,
  StInputContainer,
  StPwIcon,
  StCloseBtn,
  StLogoName,
  StAskSignUpWrapper,
  StAskSignUp
} from './styles/Login.style';
import { FiEye } from 'react-icons/fi';

const SignUp = ({ onSignUpHandler, onModalHandler }) => {
  return (
    <>
      <StLoginWrapper>
        <StCloseBtn onClick={onModalHandler}>x</StCloseBtn>
        <StLogoName>Travel Vibe</StLogoName>
        <StLoginTitle>회원가입</StLoginTitle>
        <StIdPwWrapper>
          <StLoginInput placeholder='이메일' />
          <StLoginInput placeholder='닉네임' />
          <StInputContainer>
            <StLoginInput
              type='password'
              autoComplete='on'
              placeholder='비밀번호'
            />
            <StPwIcon />
            <StLoginInput
              type='password'
              autoComplete='on'
              placeholder='비밀번호 확인'
            />
            <StPwIcon />
          </StInputContainer>
        </StIdPwWrapper>
        <StLoginBtn>회원가입</StLoginBtn>
        <StAskSignUpWrapper>
          <StAskSignUp>이미 가입하셨나요?</StAskSignUp>
          <StSignUp onClick={onSignUpHandler}>로그인</StSignUp>
        </StAskSignUpWrapper>
      </StLoginWrapper>
    </>
  );
};

export default SignUp;
