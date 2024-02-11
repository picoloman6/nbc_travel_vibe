import {
  StCheckBox,
  StIdPwWrapper,
  StLoginBtn,
  StAskSignUpWrapper,
  StLoginInput,
  StLoginTitle,
  StLoginWrapper,
  StMemoInfo,
  StMemoWrapper,
  StSignUp,
  StInputContainer,
  StPwIcon,
  StCloseBtn,
  StAskSignUp,
  StLogoName
} from './styles/Login.style';
import { StErrorMsg } from './styles/SignUp.style';

const Login = ({ onModalHandler, onSignUpHandler }) => {
  return (
    <>
      <StLoginWrapper>
        <StCloseBtn onClick={onModalHandler}>x</StCloseBtn>
        <StLogoName>Travel Vibe</StLogoName>
        <StLoginTitle>로그인</StLoginTitle>
        <StIdPwWrapper>
          <StInputContainer>
            <StLoginInput placeholder='travel123@gmail.com' />
          </StInputContainer>
          <StErrorMsg>올바르지 않은 이메일 형식입니다.</StErrorMsg>
          <StInputContainer>
            <StLoginInput
              type='password'
              autoComplete='on'
              placeholder='비밀번호'
            />
            <StPwIcon />
          </StInputContainer>
          <StErrorMsg>비밀번호가 틀립니다.</StErrorMsg>
        </StIdPwWrapper>
        <StMemoWrapper>
          <StCheckBox type='checkbox' />
          <StMemoInfo>로그인 유지하기</StMemoInfo>
        </StMemoWrapper>
        <StLoginBtn>로그인</StLoginBtn>
        <StAskSignUpWrapper>
          <StAskSignUp>아직 회원이 아니신가요?</StAskSignUp>
          <StSignUp onClick={onSignUpHandler}>회원가입</StSignUp>
        </StAskSignUpWrapper>
      </StLoginWrapper>
    </>
  );
};

export default Login;
