import styled from 'styled-components';
import colors from '../../../constants/colors';

export const ButtonStyles = `
  width: 122px;
  height: 48px;
  background: #2673DB;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: #FFFFFF;
  cursor:pointer;
`;

export const StSubmitBtn = styled.button`
  ${ButtonStyles}
  background: #2673DB;
  color: #ffffff;
`;
export const StDeleteBtn = styled.button`
  ${ButtonStyles}
  background: #F67777;
  color: #ffffff;
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const StUpdateBtn = styled.button`
  ${ButtonStyles}
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
