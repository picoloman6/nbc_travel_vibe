import React, { useState } from 'react';
import * as St from './styles/Login.style';
import {
  StLogoName,
  StLoginTitle,
  StErrorMsg,
  StIdPwWrapper,
  StSignUpBtn,
  StInputContainer
} from './styles/SignUp.style';
// import { useDispatch } from 'react-redux';
// import { postUserData } from '../../redux/modules/UserReducer';
import { FiEye, FiEyeOff } from 'react-icons/fi';
// import defaultAvatar from '../assets/defaultAvatar.png';
import { auth } from '../../apis/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({
  onSignUpHandler,
  onModalHandler,
  validEmail,
  validPw,
  importUsers,
  setIsOpen,
  setIsLoggedIn
}) => {
  // signUp의 state 상태관리
  const [email, setEmail] = useState('');
  const [firstPw, setFirstPw] = useState('');
  const [secondPw, setSecondPw] = useState('');
  const [nickName, setNickName] = useState('');
  const [isShowPw, setIsShowPw] = useState(false);
  const [isSecondShowPw, setIsSecondShowPw] = useState(false);

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);
  const [isValidNickName, setIsValidNickName] = useState(false);

  // email 형식 유효성검사
  const onCheckValidEmail = (e) => {
    setEmail(e.target.value);
    if (validEmail(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  // 중복 이메일 찾기
  const foundEmail = importUsers.find((user) => user.email === email);

  // 비밀번호 형식 유효성검사
  const onCheckValidPw = (e) => {
    setFirstPw(e.target.value);
    if (validPw(firstPw)) {
      setIsValidPw(true);
    } else {
      setIsValidPw(false);
    }
  };

  // 비밀번호 더블체크
  const onDoubleCheckPw = (e) => {
    setSecondPw(e.target.value);
  };

  // 닉네임 중복검사
  const onCheckUniqueNickname = (e) => {
    setNickName(e.target.value);
    if (foundNickname) {
      setIsValidNickName(false);
    } else {
      setIsValidNickName(true);
    }
  };
  const foundNickname = importUsers.find((user) => user.nickname === nickName);

  // 회원가입 기능
  // const dispatch = useDispatch();

  // const onSignUp = () => {
  //   if (isValidEmail && isValidPw && isValidNickName && firstPw === secondPw) {
  //     dispatch(
  //       postUserData({
  //         userId: Date.now(),
  //         email: email,
  //         nono: firstPw,
  //         nickname: nickName,
  //         image: defaultAvatar
  //       })
  //     );
  //     setIsOpen(false);
  //     // setIsLoggedIn(true);
  //     alert('축하합니다 🎉 회원가입이 완료되었습니다.');
  //   } else {
  //     alert('입력하신 정보를 확인해주세요.');
  //   }
  // };

  const onSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        firstPw
      );
      console.log('user with signUp:', userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error with signUp:', errorCode, errorMessage);
    }
  };

  // 회원가입 시 로그인상태로 전환
  // useEffect(() => {
  //   setIsLoggedIn(true);
  // }, [importUsers]);

  // 비밀번호 보이기/숨기기 토글
  const onShowPw = () => {
    setIsShowPw((prev) => !prev);
  };

  // 비밀번호 더블체크 보이기/숨기기 토글
  const onShowSecondPw = () => {
    setIsSecondShowPw((prev) => !prev);
  };

  return (
    <>
      <St.LoginWrapper>
        <St.CloseBtn onClick={onModalHandler}>x</St.CloseBtn>
        <StLogoName>Travel Vibe</StLogoName>
        <StLoginTitle>회원가입</StLoginTitle>
        <StIdPwWrapper>
          <StInputContainer>
            <St.LoginInput
              placeholder='이메일'
              value={email}
              onChange={onCheckValidEmail}
            />
          </StInputContainer>
          <StErrorMsg>
            {!isValidEmail &&
              email.length > 0 &&
              '올바르지 않은 이메일 형식입니다.'}
            {foundEmail && '중복되는 이메일입니다.'}
          </StErrorMsg>
          <StInputContainer>
            <St.LoginInput
              placeholder='닉네임'
              value={nickName}
              onChange={onCheckUniqueNickname}
            />
          </StInputContainer>
          <StErrorMsg>{foundNickname && '중복되는 닉네임입니다.'}</StErrorMsg>
          <StInputContainer>
            <St.LoginInput
              type={isShowPw ? 'text' : 'password'}
              autoComplete='on'
              placeholder='비밀번호'
              value={firstPw}
              onChange={onCheckValidPw}
            />
            <St.PwIcon onClick={onShowPw}>
              {isShowPw ? <FiEye /> : <FiEyeOff />}
            </St.PwIcon>
          </StInputContainer>
          <StErrorMsg>
            {!isValidPw && firstPw.length > 0 && (
              <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>
            )}
          </StErrorMsg>
          <StInputContainer>
            <St.LoginInput
              type={isSecondShowPw ? 'text' : 'password'}
              autoComplete='on'
              placeholder='비밀번호 확인'
              value={secondPw}
              onChange={onDoubleCheckPw}
            />
            <St.PwIcon onClick={onShowSecondPw}>
              {isSecondShowPw ? <FiEye /> : <FiEyeOff />}
            </St.PwIcon>
          </StInputContainer>
          <StErrorMsg>
            {secondPw.length > 0 &&
              firstPw !== secondPw &&
              '비밀번호가 일치하지 않습니다.'}
          </StErrorMsg>
        </StIdPwWrapper>
        <StSignUpBtn onClick={onSignUp}>회원가입</StSignUpBtn>
        <St.AskSignUpWrapper>
          <St.AskSignUp>이미 가입하셨나요?</St.AskSignUp>
          <St.SignUp onClick={onSignUpHandler}>로그인</St.SignUp>
        </St.AskSignUpWrapper>
      </St.LoginWrapper>
    </>
  );
};

export default SignUp;
