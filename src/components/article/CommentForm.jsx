import { StArticleHeaderWrapper } from './Styles/Article.style';

const CommentForm = () => {
  return (
    <StArticleHeaderWrapper>
      <form>
        <label>캐릭터</label>
        <textarea />
        <button>등록</button>
      </form>
    </StArticleHeaderWrapper>
  );
};

export default CommentForm;
