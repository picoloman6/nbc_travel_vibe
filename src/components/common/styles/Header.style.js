import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import colors from '../../../constants/colors';
import size from '../../../constants/size';
import profileImg from '../../assets/title_background.png';

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
  opacity: 50%; //조건부 렌더링 필요

  &:hover {
    opacity: 100%;
    transition: all 0.2s;
  }
`;

export const StHeaderProfileImage = styled.div`
  background-image: url(${profileImg}); //값 받아와야함
  background-size: cover;
  background-position: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const StNavLink = styled(NavLink)`
  cursor: pointer;
  color: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  background: none;
  border: none;
  text-decoration: none;
  opacity: 50%;

  &.active {
    opacity: 100%;
  }

  &:hover {
    opacity: 100%;
    transition: all 0.2s;
  }
`;
