import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <StContainer>
      <StLogoWrapper>
        <StLogoImg src='' alt='로고이미지' />
        <StLogoName>Travel Vibe</StLogoName>
      </StLogoWrapper>
      <StLoginWrapper>
        <StTitle>로그인</StTitle>
        <StIdPwWrapper>
          <StEmail>이메일</StEmail>
          <StEmailInput />
          <StPassword>비밀번호</StPassword>
          <StPasswordInput />
        </StIdPwWrapper>
        <StMemoWrapper>
          <StCheckBox />
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

const StContainer = styled.div`
  display: flex;
`;

const StLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StLogoImg = styled.img`
  width: 70px;
  height: 70px;
`;

const StLogoName = styled.p`
  font-family: 'Inter';
  font-style: italic;
  font-weight: 900;
  font-size: 70px;
  line-height: 85px;

  color: #2673db;
`;

export default Login;
