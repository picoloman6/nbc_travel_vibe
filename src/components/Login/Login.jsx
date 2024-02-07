import React from 'react';
import {
  StCheckBox,
  StContainer,
  StIdPwWrapper,
  StLoginBtn,
  StLoginBtnWrapper,
  StLoginInput,
  StLoginTitle,
  StLoginWrapper,
  StLogoImg,
  StLogoName,
  StLogoWrapper,
  StMailPw,
  StMemoInfo,
  StMemoWrapper,
  StSignUp,
  StInputContainer,
  StPwIcon
} from '../../styles/Login';

const Login = () => {
  return (
    <StContainer>
      <StLogoWrapper>
        <StLogoImg src='test.png' alt='로고이미지' />
        <StLogoName>Travel Vibe</StLogoName>
      </StLogoWrapper>
      <StLoginWrapper>
        <StLoginTitle>로그인</StLoginTitle>
        <StIdPwWrapper>
          <StMailPw>이메일</StMailPw>
          <StLoginInput />
          <StInputContainer>
            <StMailPw>비밀번호</StMailPw>
            <StLoginInput type='password' />
            <StPwIcon src='' alt='비밀번호확인' />
          </StInputContainer>
        </StIdPwWrapper>
        <StMemoWrapper>
          <StCheckBox type='checkbox' />
          <StMemoInfo>로그인 정보 기억하기</StMemoInfo>
        </StMemoWrapper>
        <StLoginBtnWrapper>
          <StLoginBtn>로그인</StLoginBtn>
          <StSignUp>회원가입</StSignUp>
        </StLoginBtnWrapper>
      </StLoginWrapper>
    </StContainer>
  );
};

export default Login;
