import React, { useEffect, useState } from 'react';
import {
  StLoginWrapper,
  StSignUp,
  StPwIcon,
  StCloseBtn,
  StAskSignUpWrapper,
  StAskSignUp,
  StLoginInput
} from './styles/Login.style';
import {
  StLogoName,
  StLoginTitle,
  StErrorMsg,
  StIdPwWrapper,
  StSignUpBtn,
  StInputContainer
} from './styles/SignUp.style';
import { useDispatch } from 'react-redux';
import { postUserData } from '../../redux/modules/UserReducer';
import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';

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
  const [secondIsShowPw, setSecondIsShowPw] = useState(false);

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
  const dispatch = useDispatch();

  const onSignUp = () => {
    if (isValidEmail && isValidPw && isValidNickName) {
      dispatch(
        postUserData({
          userId: Date.now(),
          email: email,
          nono: firstPw,
          nickname: nickName
        })
      );
      setIsOpen(false);
      setIsLoggedIn(true);
    } else {
      alert('입력하신 정보를 확인해주세요.');
    }
  };
  // useEffect(() => {
  //   console.log(importUsers);
  // }, [dispatch, importUsers]);

  // 비밀번호 보이기/숨기기 토글
  const onShowPw = () => {
    setIsShowPw((prev) => !prev);
  };

  // 비밀번호 더블체크 보이기/숨기기 토글
  const onShowSecondPw = () => {
    setSecondIsShowPw((prev) => !prev);
  };

  return (
    <>
      <StLoginWrapper>
        <StCloseBtn onClick={onModalHandler}>x</StCloseBtn>
        <StLogoName>Travel Vibe</StLogoName>
        <StLoginTitle>회원가입</StLoginTitle>
        <StIdPwWrapper>
          <StInputContainer>
            <StLoginInput
              placeholder='travel123@gmail.com'
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
            <StLoginInput
              placeholder='닉네임'
              value={nickName}
              onChange={onCheckUniqueNickname}
            />
          </StInputContainer>
          <StErrorMsg>{foundNickname && '중복되는 닉네임입니다.'}</StErrorMsg>
          <StInputContainer>
            <StLoginInput
              type={isShowPw ? 'text' : 'password'}
              autoComplete='on'
              placeholder='비밀번호'
              value={firstPw}
              onChange={onCheckValidPw}
            />
            <StPwIcon onClick={onShowPw}>
              {isShowPw ? <FiEye /> : <FiEyeOff />}
            </StPwIcon>
          </StInputContainer>
          <StErrorMsg>
            {!isValidPw && firstPw.length > 0 && (
              <div>영문, 숫자 포함 8자 이상 입력해주세요.</div>
            )}
          </StErrorMsg>
          <StInputContainer>
            <StLoginInput
              type={secondIsShowPw ? 'text' : 'password'}
              autoComplete='on'
              placeholder='비밀번호 확인'
              value={secondPw}
              onChange={onDoubleCheckPw}
            />
            <StPwIcon onClick={onShowSecondPw}>
              {secondIsShowPw ? <FiEye /> : <FiEyeOff />}
            </StPwIcon>
          </StInputContainer>
          <StErrorMsg>
            {secondPw.length > 0 &&
              firstPw !== secondPw &&
              '비밀번호가 일치하지 않습니다.'}
          </StErrorMsg>
        </StIdPwWrapper>
        <StSignUpBtn onClick={onSignUp}>회원가입</StSignUpBtn>
        <StAskSignUpWrapper>
          <StAskSignUp>이미 가입하셨나요?</StAskSignUp>
          <StSignUp onClick={onSignUpHandler}>로그인</StSignUp>
        </StAskSignUpWrapper>
      </StLoginWrapper>
    </>
  );
};

export default SignUp;
