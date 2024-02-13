import {
  StArticleHeaderWrapper,
  StArticleCommentTop,
  StArticleCommentUser,
  StArticleComment
} from './Styles/Article.style';
import { StDeleteBtn } from '../common/styles/Button.style';
import { StArticleHr } from '../../pages/styles/Article.style';
import { dateConvertor } from '../../Shared/date';

const Comment = ({ comment, border, deleteComment }) => {
  const { commentId, content, createdAt, userNickname } = comment;

  return (
    <>
      <StArticleHeaderWrapper>
        <StArticleCommentTop>
          <StArticleCommentUser>
            <span>사진</span>
            <span>{userNickname}</span>
            <span>{dateConvertor(createdAt)}</span>
          </StArticleCommentUser>
          <StDeleteBtn
            onClick={() => deleteComment(commentId)}
            $width='35px'
            $height='25px'
            $fontSize='11px'>
            삭제
          </StDeleteBtn>
        </StArticleCommentTop>
        <StArticleComment>{content}</StArticleComment>
      </StArticleHeaderWrapper>
      {border && <StArticleHr />}
    </>
  );
};

export default Comment;
