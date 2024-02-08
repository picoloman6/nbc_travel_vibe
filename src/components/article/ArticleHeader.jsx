import React from 'react';

const ArticleHeader = () => {
  return (
    <>
      <div>
        <span>카테고리</span>
      </div>
      <div>
        <span>글 제목</span>
      </div>
      <div>
        <span>닉네임 | 날짜</span>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </>
  );
};

export default ArticleHeader;
