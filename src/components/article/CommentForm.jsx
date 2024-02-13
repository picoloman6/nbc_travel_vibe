import {
  StArticleHeaderWrapper,
  StArticleForm,
  StArticleTextArea
} from './Styles/Article.style';

import { StSubmitBtn } from '../common/styles/Button.style';

const CommentForm = ({ postComment }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
      postComment(e.currentTarget.content.value);
      e.currentTarget.reset();
    }
  };

  return (
    <StArticleHeaderWrapper>
      <StArticleForm onClick={handleClick}>
        <label>캐릭터</label>
        <StArticleTextArea name='content' />
        <StSubmitBtn $width='60px' $height='30px' $fontSize='16px'>
          등록
        </StSubmitBtn>
      </StArticleForm>
    </StArticleHeaderWrapper>
  );
};

export default CommentForm;
