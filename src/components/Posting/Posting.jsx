import styled from 'styled-components';
import Category from './Category';
import size from '../../constants/size';
import colors from '../../constants/colors';
import { useState } from 'react';
import Header from '../common/Header';
const Posting = () => {
  const [textarea, setTextarea] = useState(1);

  return (
    <StContainer>
      <Header />
      <Body>
        <StDropDownWrap>
          <Category />
        </StDropDownWrap>
        <StContentSection>
          <StTitle placeholder='제목을 입력하셈'></StTitle>
          <StPhotos></StPhotos>
          <StWrite placeholder='글 쓰셈'></StWrite>
        </StContentSection>
        <StConformButton>ㄱㄱㄱ</StConformButton>
      </Body>
    </StContainer>
  );
};

export default Posting;

export const Body = styled.div`
  width: 70%;
`;

export const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${size.wrapperWidth};
  min-height: ${size.bodyMinHeight};
  margin: 0 auto;
`;

export const StDropDownWrap = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const StContentSection = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;

  min-height: 686px;

  background: #ffffff;
  border: 2px solid #c6c6c6;
`;

export const StTitle = styled.input`
  width: 95%;
  min-height: 75px;
  font-style: normal;
  font-size: 48px;
  border: none;
  border-bottom: 1px solid black;
  color: black;
`;

export const StPhotos = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 95%;
  height: 248px;

  background: #d9d9d9;
`;

export const StWrite = styled.textarea`
  width: 95%;
  height: auto;
  min-height: 250px;

  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  resize: none;
  overflow: hidden;

  border: none;
  border-top: 1px solid black;
  color: #000000;
`;

export const StConformButton = styled.button`
  align-self: flex-end;

  width: 158px;
  height: 48px;

  color: white;
  font-size: 30px;

  background: ${colors.mainBlue};
  border-radius: 20px;
  border: none;
`;
