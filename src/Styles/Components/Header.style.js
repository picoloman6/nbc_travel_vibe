import styled from 'styled-components';

import colors from '../../constants/colors';

export const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1775px;
  height: 63px;
  background: ${colors.mainBlue};
  line-height: 39px;
  margin: 0 auto;
`;

export const StHeaderBtnWapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px 0 50px;
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
