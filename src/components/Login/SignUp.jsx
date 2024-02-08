import React from 'react';
import {
  StLoginWrapper,
  StSignUp,
  StInputContainer,
  StPwIcon,
  StCloseBtn,
  StAskSignUpWrapper,
  StAskSignUp
} from './styles/Login.style';
import {
  StLogoName,
  StLoginTitle,
  StLoginInput,
  StErrorMsg,
  StIdPwWrapper,
  StSignUpBtn
} from './styles/SignUp.style';

const SignUp = ({ onSignUpHandler, onModalHandler }) => {
  return (
    <>
      <StLoginWrapper>
        <StCloseBtn onClick={onModalHandler}>x</StCloseBtn>
        <StLogoName>Travel Vibe</StLogoName>
        <StLoginTitle>회원가입</StLoginTitle>
        <StIdPwWrapper>
          <StLoginInput placeholder='이메일' />
          <StErrorMsg>중복되는 이메일입니다.</StErrorMsg>
          <StLoginInput placeholder='닉네임' />
          <StErrorMsg>중복되는 닉네임입니다.</StErrorMsg>
          <StInputContainer>
            <StLoginInput
              type='password'
              autoComplete='on'
              placeholder='비밀번호'
            />
            <StPwIcon />
            <StErrorMsg>현재 비밀번호가 틀립니다.</StErrorMsg>
            <StLoginInput
              type='password'
              autoComplete='on'
              placeholder='비밀번호 확인'
            />
            <StPwIcon />
            <StErrorMsg>비밀번호가 일치하지 않습니다.</StErrorMsg>
          </StInputContainer>
        </StIdPwWrapper>
        <StSignUpBtn>회원가입</StSignUpBtn>
        <StAskSignUpWrapper>
          <StAskSignUp>이미 가입하셨나요?</StAskSignUp>
          <StSignUp onClick={onSignUpHandler}>로그인</StSignUp>
        </StAskSignUpWrapper>
      </StLoginWrapper>
    </>
  );
};

export default SignUp;
