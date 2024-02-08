import styled from 'styled-components';
import colors from '../../../constants/colors';

export const StBackground = styled.div`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};

  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export const StContainer = styled.div`
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  width: 26%;
  height: 67%;
  border-radius: 5px;
`;

export const StCloseBtn = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 3%;
  right: 3%;
  padding: 0px;
  background-color: white;
  border: 1.5px solid ${colors.mainBlue};
  border-radius: 3px;
  color: ${colors.mainBlue};
  cursor: pointer;
`;

export const StLogoName = styled.p`
  font-weight: 900;
  font-size: 40px;
  font-style: italic;
  margin-top: 30px;

  color: ${colors.mainBlue};
`;

export const StLoginWrapper = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const StLoginTitle = styled.p`
  font-weight: 700;
  font-size: 25px;
  text-align: center;

  color: black;
`;

export const StIdPwWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const StInputContainer = styled.div`
  position: relative;
`;

export const StLoginInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: 0px;
  background-color: #f2f2f2;
  margin-bottom: 10px;
  color: #838383;
`;

export const StPwIcon = styled.img`
  position: absolute;
  width: 30px;
  top: 50%;
  right: 5%;
  cursor: pointer;
`;

export const StMemoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5%;
`;

export const StCheckBox = styled.input`
  width: 15px;
`;

export const StMemoInfo = styled.span`
  /* font-weight: 600; */
  font-size: 12px;

  color: #838383;
`;

export const StLoginBtn = styled.button`
  background: ${colors.mainBlue};
  border-radius: 2px;
  border: 0px;

  font-weight: 600;
  font-size: 15px;
  height: 30px;
  width: 100%;

  color: #ffffff;
  cursor: pointer;
`;

export const StLoginBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StAskSignUp = styled.span`
  font-size: 12px;
  color: #838383;
`;

export const StSignUp = styled.span`
  font-weight: 600;
  font-size: 15px;
  text-decoration-line: underline;

  color: #000000;
  cursor: pointer;
`;
