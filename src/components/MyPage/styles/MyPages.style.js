import styled from 'styled-components';

import size from '../../../constants/size';
import colors from '../../../constants/colors';

export const StContainer = styled.div`
  width: ${size.wrapperWidth};
  min-height: ${size.bodyMinHeight};
  background: ${colors.subBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 800px;
`;

export const StMyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 200px;
  width: 100%;
`;

export const StMyPageTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
  color: ${colors.mainBlue};
  margin-bottom: 20px;
`;

export const StUserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 10px;
  padding: 40px;
  gap: 60px;
  width: 100%;
`;

export const StAvatar = styled.img`
  flex-shrink: 0;
  width: 200px;
  height: 200px;
`;

export const StUserInfoDeatilWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  width: 100%;
  & label {
    font-weight: 400;
    font-size: 24px;
  }
  & input {
    width: 100%;
    height: 48px;
    background: ${colors.buttonText};
    border: 1px solid ${colors.subText};
    box-sizing: border-box;
    padding-left: 20px;
    padding-left: 20px;
    font-size: 24px;
  }
  & input ::placeholder {
    color: ${colors.subText};
  }
`;

export const StEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  & div {
    width: 100%;
    height: 48px;
    box-sizing: border-box;
    background: ${colors.backgroudColor};
    font-weight: 600;
    font-size: 24px;
    color: ${colors.subText};
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
`;

export const StNickName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StCurrentPw = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StNewPw = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StBtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 20px;
`;

export const StImgUpdate = styled.p`
  font-size: 24px;
  margin-top: 15px;
`;
