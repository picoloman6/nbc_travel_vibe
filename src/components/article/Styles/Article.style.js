import styled from 'styled-components';

import colors from '../../../constants/colors';

export const StArticleHeaderWrapper = styled.div`
  padding: 30px 40px;
`;

export const StArticleHeaderTitle = styled.h1`
  margin: 20px 0;
  font-size: 48px;
  font-weight: bold;
`;

export const StArticleHeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;

  button:first-child {
    margin-right: 10px;
  }
`;

export const StArticleContent = styled.p`
  font-size: 32px;
  line-height: 50px;
  margin: 35px 0;
`;

export const StArticleContentBottom = styled.div`
  display: flex;

  font-size: 23px;
  gap: 25px;

  > div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const StArticleHeart = styled.div`
  > svg {
    color: ${colors.heart};
  }
`;

export const StArticleForm = styled.form`
  > button {
    margin: 15px 0;
    float: right;
  }
`;

export const StArticleTextArea = styled.textarea`
  width: 100%;
  height: 70px;
  border: 1px solid black;
  margin-top: 15px;
  resize: none;
  line-height: 23px;
`;
