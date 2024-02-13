import {
  StArticleHeaderWrapper,
  StArticleCommentTop,
  StArticleCommentUser,
  StArticleComment
} from './Styles/Article.style';
import { StDeleteBtn } from '../common/styles/Button.style';
import { dateConvertor } from '../../Shared/date';

const Comment = ({ comment }) => {
  const { content, createdAt, userNickname } = comment;

  return (
    <StArticleHeaderWrapper>
      <StArticleCommentTop>
        <StArticleCommentUser>
          <span>사진</span>
          <span>{userNickname}</span>
          <span>{dateConvertor(createdAt)}</span>
        </StArticleCommentUser>
        <StDeleteBtn $width='35px' $height='25px' $fontSize='11px'>
          삭제
        </StDeleteBtn>
      </StArticleCommentTop>
      <StArticleComment>{content}</StArticleComment>
    </StArticleHeaderWrapper>
  );
};

export default Comment;
