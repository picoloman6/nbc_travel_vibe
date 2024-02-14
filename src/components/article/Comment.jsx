import {
  StArticleHeaderWrapper,
  StArticleCommentTop,
  StArticleCommentUser,
  StArticleComment
} from './Styles/Article.style';
import { StDeleteBtn } from '../common/styles/Button.style';
import { StArticleHr } from '../../pages/styles/Article.style';
import { dateConvertor } from '../../Shared/date';

const Comment = ({ comment, border, deleteComment, isOwnComment }) => {
  const { commentId, userId, content, createdAt, userNickname, userPhoto } =
    comment;

  return (
    <>
      <StArticleHeaderWrapper>
        <StArticleCommentTop>
          <StArticleCommentUser>
            <img
              src={
                userPhoto === '기본이미지'
                  ? 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcR7h0XNCZC4R_NicVVuNbbE9YrQ0iAjncl3didVtA9P8kN5PhgZy_aKPP15vfL_98IBZJjsXZEUKjzS66g'
                  : userPhoto
              }
              alt='기본이미지'
              style={{ width: '40px', height: '40px', borderRadius: '50px' }}
            />
            <span>{userNickname}</span>
            <span>{dateConvertor(createdAt)}</span>
          </StArticleCommentUser>
          {isOwnComment && (
            <StDeleteBtn
              onClick={() => deleteComment(commentId, userId)}
              $width='35px'
              $height='25px'
              $fontSize='11px'>
              삭제
            </StDeleteBtn>
          )}
        </StArticleCommentTop>
        <StArticleComment>{content}</StArticleComment>
      </StArticleHeaderWrapper>
      {border && <StArticleHr />}
    </>
  );
};

export default Comment;
