import styled from 'styled-components';

export const StModalContainer = styled.div`
  display: ${(props) => (props.$isPhotoOpen ? 'block' : 'none')};
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export const StPhotoContainer = styled.div`
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
