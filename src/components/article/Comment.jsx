import {
  StArticleHeaderWrapper,
  StArticleCommentTop,
  StArticleCommentUser,
  StArticleComment
} from './Styles/Article.style';
import { StDeleteBtn } from '../common/styles/Button.style';

const Comment = () => {
  return (
    <StArticleHeaderWrapper>
      <StArticleCommentTop>
        <StArticleCommentUser>
          <span>사진</span>
          <span>닉네임</span>
        </StArticleCommentUser>
        <StDeleteBtn $width='35px' $height='25px' $fontSize='11px'>
          삭제
        </StDeleteBtn>
      </StArticleCommentTop>
      <StArticleComment>
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
      </StArticleComment>
    </StArticleHeaderWrapper>
  );
};

export default Comment;
