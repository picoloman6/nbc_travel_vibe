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

export const StLogoName = styled.p`
  font-weight: 800;
  font-size: 35px;
  font-style: italic;
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;

  color: ${colors.mainBlue};
`;

export const StLoginTitle = styled.p`
  font-weight: 700;
  font-size: 23px;
  text-align: center;
  margin: 10px 0px;

  color: black;
`;

export const StIdPwWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const StLoginInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 3px;
  border: 0px;
  background-color: #f2f2f2;
  color: #838383;
  font-size: 15px;
`;

export const StMemoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5%;
`;

export const StCheckBox = styled.input`
  width: 15px;
  margin-right: 10px;
`;

export const StMemoInfo = styled.span`
  font-size: 12px;

  color: #838383;
`;

export const StSignUpBtn = styled.button`
  background: ${colors.mainBlue};
  border-radius: 2px;
  border: 0px;
  margin-bottom: 10px;

  font-weight: 600;
  font-size: 15px;
  height: 40px;
  width: 100%;

  color: #ffffff;
  cursor: pointer;
`;

export const StErrorMsg = styled.span`
  color: #838383;
  font-size: 12px;
  height: 35px;
`;
