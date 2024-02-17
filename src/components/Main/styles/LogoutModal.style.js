import styled from 'styled-components';

import colors from '../../../constants/colors';

export const StBackground = styled.div`
  display: block;
  z-index: ${(props) => (props.$isLogoutModalOpen ? '10' : '-1')};
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.$isLogoutModalOpen ? '1' : '0')};
  transition: all 0.3s;
`;

export const StLogoutContainer = styled.div`
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
  height: 20%;
  width: 20%;
  min-width: 300px;
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
  font-weight: 800;
  font-size: 35px;
  font-style: italic;
  margin: 50px 0px;
  text-align: center;

  color: ${colors.mainBlue};
`;

export const StLogoutTitle = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 10px;
  font-weight: normal;

  color: black;
`;

export const StLogoutButton = styled.button`
  background: ${colors.mainBlue};
  border-radius: 2px;
  border: 0px;
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  height: 40px;
  width: 100%;

  color: #ffffff;
  cursor: pointer;
`;

export const StCancelButton = styled(StLogoutButton)`
  background-color: ${colors.subText};
`;

export const StButtonWrap = styled.div`
  display: flex;
  gap: 10px;
  width: 200px;
`;
