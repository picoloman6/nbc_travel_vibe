import styled from 'styled-components';

export const StContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  width: 700px;
  height: 400px;
  border: 1px solid #2673db;
`;

export const StLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`;

export const StLogoImg = styled.img`
  width: 70px;
  height: 70px;
`;

export const StLogoName = styled.p`
  font-weight: 900;
  font-size: 40px;
  line-height: 85px;

  color: #2673db;
`;

export const StLoginWrapper = styled.div``;

export const StLoginTitle = styled.p`
  font-weight: 800;
  font-size: 30px;
  line-height: 67px;
  text-align: center;

  color: #2673db;
`;

export const StIdPwWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StMailPw = styled.p`
  font-weight: 600;
  font-size: 23px;
  line-height: 39px;

  color: #2673db;
`;

export const StLoginInput = styled.input`
  width: 300px;
  height: 40px;
  left: 991px;
  top: 534px;
  border-radius: 5px;
  border: 1px solid #2673db;
  background-color: #e3e3e3;
`;

export const StMemoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const StCheckBox = styled.input`
  width: 20px;
  margin: 20px;
`;

export const StMemoInfo = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 29px;

  color: #000000;
`;

export const StLoginBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StLoginBtn = styled.button`
  background: #2673db;
  border-radius: 5px;
  border: 0px;

  font-weight: 600;
  font-size: 17px;
  height: 40px;

  color: #ffffff;
`;

export const StSignUp = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 29px;
  text-decoration-line: underline;

  color: #000000;
`;
