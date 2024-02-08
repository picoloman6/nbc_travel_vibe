import { StArticleHeaderRest } from '../../Styles/Components/Article.style';

const ArticleHeader = () => {
  return (
    <div>
      <div>
        <span>카테고리</span>
      </div>
      <div>
        <h3>글 제목</h3>
      </div>
      <StArticleHeaderRest>
        <span>닉네임 | 날짜</span>
        <div>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </StArticleHeaderRest>
    </div>
  );
};

export default ArticleHeader;
