import {
  StArticleHeaderWrapper,
  StArticleForm,
  StArticleTextArea
} from './Styles/Article.style';

import { StSubmitBtn } from '../common/styles/Common.style';

const CommentForm = () => {
  return (
    <StArticleHeaderWrapper>
      <StArticleForm>
        <label>캐릭터</label>
        <StArticleTextArea />
        <StSubmitBtn $width='60px' $height='30px' $fontSize='16px'>
          등록
        </StSubmitBtn>
      </StArticleForm>
    </StArticleHeaderWrapper>
  );
};

export default CommentForm;
