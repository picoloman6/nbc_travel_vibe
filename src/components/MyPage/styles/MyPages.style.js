import styled from "styled-components";
import size from "../../../constants/size";
import colors from "../../../constants/colors";

export const StContainer = styled.div`
  width: ${size.wrapperWidth};
  min-height: ${size.bodyMinHeight};
  background: #cdddf5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const StMyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 200px;
  width: 100%;
`
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
export const StAvatar = styled.div`
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  background-color: green;
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
    background: #ffffff;
    border: 1px solid #838383;
    box-sizing: border-box;
    padding-left: 20px;
    padding-left: 20px;
    font-size: 24px;
  }
  & input ::placeholder {
    color: #838383;
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
    background: #f2f2f2;
    font-weight: 600;
    font-size: 24px;
    color: #838383;
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