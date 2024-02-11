import styled from 'styled-components';

import colors from '../../../constants/colors';
import size from '../../../constants/size';

export const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${size.bodyWidth};
  height: 63px;
  background: ${colors.mainBlue};
  line-height: 39px;
  margin: 0 auto;
`;

export const StHeaderBtnWapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  gap: 20px;
`;

export const StHeaderBtn = styled.button`
  cursor: pointer;
  color: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  background: none;
  border: none;
`;

export const Test = styled.img`
  width: 50px;
  margin-right: 20px;
  display: ${($isLoggedIn) => ($isLoggedIn ? 'block' : 'none')};
  cursor: pointer;
`;
