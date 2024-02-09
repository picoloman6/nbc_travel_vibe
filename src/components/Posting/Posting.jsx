import styled from 'styled-components';
import Category from './Category';
import size from '../../constants/size';
import colors from '../../constants/colors';
import Header from '../common/Header';
const Posting = () => {
  return (
    <StContainer>
      <Header />
      <Body>
        <StWriteBox>
          <StContentSection>
            <StTitle placeholder='제목을 입력하셈'></StTitle>
            <StPhotos></StPhotos>
            <StWrite placeholder='글 쓰셈' />
          </StContentSection>
          <StDropDownWrap>
            <StConformButton>ㄱㄱㄱ</StConformButton>
            <Category />
          </StDropDownWrap>
        </StWriteBox>
      </Body>
    </StContainer>
  );
};

export default Posting;

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

export const StWriteBox = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 30px 0;
`;

export const Body = styled.div`
  background-color: white;
  width: ${size.bodyWidth};
`;

export const StContainer = styled.div`
  width: ${size.wrapperWidth};
  min-height: ${size.bodyMinHeight};
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const StDropDownWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  gap: 20px;
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

export const StConformButton = styled.button`
  width: 158px;
  height: 48px;

  color: white;
  font-size: 30px;

  background: ${colors.mainBlue};
  border-radius: 20px;
  border: none;
`;
