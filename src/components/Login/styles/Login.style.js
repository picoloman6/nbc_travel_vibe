import styled from 'styled-components';
import colors from '../../../constants/colors';

export const StBackground = styled.div`
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};

  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
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
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;
  box-sizing: border-box;
  width: 800px;
  height: 400px;
  border: 1.5px solid ${colors.mainBlue};
  border-radius: 7px;
  /* box-shadow: 0px 0px 3px 0px; */
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

export const StLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin-top: 40px;
`;

export const StLogoImg = styled.img`
  width: 140px;
  height: 90px;
`;

export const StLogoName = styled.p`
  font-weight: 900;
  font-size: 40px;
  font-style: italic;
  margin: 30px 0px;

  color: ${colors.mainBlue};
`;

export const StLoginWrapper = styled.div`
  margin-right: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const StLoginTitle = styled.p`
  font-weight: 800;
  font-size: 30px;
  text-align: center;

  color: ${colors.mainBlue};
`;

export const StIdPwWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const StMailPw = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;

  color: ${colors.mainBlue};
`;

export const StInputContainer = styled.div`
  position: relative;
`;

export const StLoginInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid ${colors.mainBlue};
  background-color: #e3e3e3;
  margin-bottom: 10px;
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
  width: 20px;
`;

export const StMemoInfo = styled.span`
  font-weight: 600;
  font-size: 15px;

  color: #000000;
`;

export const StLoginBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StLoginBtn = styled.button`
  background: ${colors.mainBlue};
  border-radius: 5px;
  border: 0px;

  font-weight: 600;
  font-size: 15px;
  height: 30px;

  color: #ffffff;
  cursor: pointer;
`;

export const StSignUp = styled.p`
  font-weight: 600;
  font-size: 15px;
  text-decoration-line: underline;

  color: #000000;
  cursor: pointer;
`;
