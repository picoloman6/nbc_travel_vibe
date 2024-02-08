import {
  StCheckBox,
  StIdPwWrapper,
  StLoginBtn,
  StLoginBtnWrapper,
  StLoginInput,
  StLoginTitle,
  StLoginWrapper,
  StMemoInfo,
  StMemoWrapper,
  StSignUp,
  StInputContainer,
  StPwIcon,
  StCloseBtn,
  StAskSignUp
} from './styles/Login.style';
import pwCheck1 from '../../assets/pwCheck1.jpg';

const Login = ({ isSignUp, setIsSignUp, onModalHandler }) => {
  const onSignUpHandler = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <StLoginWrapper>
        <StCloseBtn onClick={onModalHandler}>x</StCloseBtn>
        <StLoginTitle>로그인</StLoginTitle>
        <StIdPwWrapper>
          <StLoginInput placeholder='이메일' />
          <StInputContainer>
            <StLoginInput
              type='password'
              autoComplete='on'
              placeholder='비밀번호'
            />
            <StPwIcon src={pwCheck1} alt='비밀번호확인' />
          </StInputContainer>
        </StIdPwWrapper>
        <StMemoWrapper>
          <StCheckBox type='checkbox' />
          <StMemoInfo>로그인 유지하기</StMemoInfo>
        </StMemoWrapper>
        <StLoginBtn>로그인</StLoginBtn>

        <StLoginBtnWrapper>
          <StAskSignUp>아직 회원이 아니신가요?</StAskSignUp>
          <StSignUp onClick={onSignUpHandler}>회원가입</StSignUp>
        </StLoginBtnWrapper>
      </StLoginWrapper>
    </>
  );
};

export default Login;
