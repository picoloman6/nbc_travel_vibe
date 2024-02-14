import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import * as St from './styles/Login.style';
import { StErrorMsg } from './styles/SignUp.style';
import { auth } from '../../apis/config';
import { getUsersApi } from '../../apis/users';
import { postUserData } from '../../redux/modules/UserReducer';

const Login = ({
  setIsOpen,
  onModalHandler,
  onSignUpHandler,
  setIsLoggedIn,
  validEmail,
  validPw
}) => {
  // Login의 state 상태관리
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);

  // email 형식 유효성검사
  const onCheckValidEmail = (e) => {
    setEmail(e.target.value);
    if (validEmail(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  // 비밀번호 형식 유효성검사
  const onCheckValidPw = (e) => {
    setPw(e.target.value);
    if (validPw(pw)) {
      setIsValidPw(true);
    } else {
      setIsValidPw(false);
    }
  };

  const dispatch = useDispatch();
  const onLoginConfirm = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pw);
      const { accessToken, uid } = userCredential.user;
      const userInfo = await getUsersApi(email);

      dispatch(postUserData({ accessToken, userId: uid, email, ...userInfo }));

      alert('로그인 되었습니다.');
      setIsLoggedIn(false);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  // 비밀번호 보이게 하기
  const [isShowPw, setIsShowPw] = useState(false);
  const onShowPw = () => {
    setIsShowPw((prev) => !prev);
  };

  return (
    <>
      <St.LoginWrapper>
        <St.CloseBtn onClick={onModalHandler}>x</St.CloseBtn>
        <St.LogoName>Travel Vibe</St.LogoName>
        <St.LoginTitle>로그인</St.LoginTitle>
        <St.IdPwWrapper>
          <St.InputContainer>
            <St.LoginInput
              placeholder='이메일'
              value={email}
              onChange={onCheckValidEmail}
            />
          </St.InputContainer>
          <StErrorMsg>
            {!isValidEmail && email.length > 0 && (
              <div>올바르지 않은 이메일 형식입니다.</div>
            )}
          </StErrorMsg>
          <St.InputContainer>
            <St.LoginInput
              type={isShowPw ? 'text' : 'password'}
              autoComplete='on'
              placeholder='비밀번호'
              value={pw}
              onChange={onCheckValidPw}
            />
            <St.PwIcon onClick={onShowPw}>
              {isShowPw ? <FiEye /> : <FiEyeOff />}
            </St.PwIcon>
          </St.InputContainer>
          <StErrorMsg>
            {!isValidPw && pw.length > 0 && (
              <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>
            )}
          </StErrorMsg>
        </St.IdPwWrapper>
        <St.MemoWrapper>
          <St.CheckBox type='checkbox' />
          <St.MemoInfo>로그인 유지하기</St.MemoInfo>
        </St.MemoWrapper>
        <St.LoginBtn onClick={onLoginConfirm}>로그인</St.LoginBtn>
        <St.AskSignUpWrapper>
          <St.AskSignUp>아직 회원이 아니신가요?</St.AskSignUp>
          <St.SignUp onClick={onSignUpHandler}>회원가입</St.SignUp>
        </St.AskSignUpWrapper>
      </St.LoginWrapper>
    </>
  );
};

export default Login;
