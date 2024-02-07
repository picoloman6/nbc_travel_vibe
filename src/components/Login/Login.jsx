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
          <StMailPw>이메일</StMailPw>
          <StLoginInput />
          <StMailPw>비밀번호</StMailPw>
          <StLoginInput />
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

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 1000px;
  height: 800px;
  border: 1px solid blue;
`;

const StLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
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

const StLoginWrapper = styled.div`
  width: 600px;
  height: 100%;
`;

const StTitle = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 67px;

  color: #2673db;
`;

const StIdPwWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StMailPw = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;

  color: #2673db;
`;

const StLoginInput = styled.input`
  /* position: relative; */
  width: 464.06px;
  height: 59.08px;
  left: 991px;
  top: 534px;
  border-radius: 3px;
`;

const StMemoWrapper = styled.div`
  display: flex;
`;

const StCheckBox = styled.input`
  box-sizing: border-box;

  position: absolute;
  left: 47.92%;
  right: 50.8%;
  top: 58.94%;
  bottom: 38.96%;

  background: #ffffff;
  border: 3px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StMemoInfo = styled.p`
  position: absolute;
  left: 50.39%;
  right: 38.68%;
  top: 59.18%;
  bottom: 39.24%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
`;

const StLoginBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  position: relative;
  width: 101.89px;
  height: 47.09px;
  left: 990px;
  top: 813px;
`;

const StLoginBtn = styled.button`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  background: #2673db;
  border-radius: 5px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  color: #ffffff;
`;

const StSignUp = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-decoration-line: underline;

  color: #000000;
`;

export default Login;
