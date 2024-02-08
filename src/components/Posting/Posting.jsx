import styled from 'styled-components';
import Category from './Category';

const Posting = () => {
  return (
    <StContainer>
      <StDropDownWrap>
        <Category />
      </StDropDownWrap>
      <StContentSection>
        <StWritingBox>
          <StTitle placeholder='제목을 입력하셈'></StTitle>
          <StPhotos></StPhotos>
          <StWrite placeholder='글 쓰셈'></StWrite>
        </StWritingBox>
      </StContentSection>
      <StConformButton>ㄱㄱㄱ</StConformButton>
    </StContainer>
  );
};

export default Posting;

export const StContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StDropDownWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StContentSection = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;

  width: 1140px;
  height: 686px;
  left: calc(50% - 1140px / 2);

  background: #ffffff;
  border: 2px solid #c6c6c6;
`;

export const StWritingBox = styled.div``;

export const StTitle = styled.input`
  width: 1053px;
  height: 75px;
  font-family: 'Inter';
  font-style: normal;
  font-size: 48px;
  border: none;
  border-bottom: 1px solid black;
  color: black;
`;

export const StPhotos = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 1053px;
  height: 248px;

  background: #d9d9d9;
`;

export const StWrite = styled.textarea`
  width: 1053px;
  left: 507px;
  top: 750px;
  height: auto;
  min-height: 250px;

  font-family: 'Inter';
  font-style: normal;
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
  font-size: 20px;

  background: #2673db;
  border-radius: 20px;
  border: none;
`;
