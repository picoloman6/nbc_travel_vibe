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

const Login = ({ isSignUp, setIsSignUp, onModalHandler }) => {
  const onSignUpHandler = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <StLoginWrapper>
        <StCloseBtn onClick={onModalHandler}>x</StCloseBtn>
        <StLogoName>Travel Vibe</StLogoName>
        <StLoginTitle>로그인</StLoginTitle>
        <StIdPwWrapper>
          <StLoginInput placeholder='이메일' />
          <StInputContainer>
            <StLoginInput
              type='password'
              autoComplete='on'
              placeholder='비밀번호'
            />
            <StPwIcon />
          </StInputContainer>
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
