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
    cursor: pointer;
`;

export const StSubmitBtn = styled.button`
  ${ButtonStyles}
  background: ${colors.mainBlue};
  color: #ffffff
`;
export const StDeleteBtn = styled.button`
  ${ButtonStyles}
  background: ${colors.deleteText};
  color: #ffffff;
`;
