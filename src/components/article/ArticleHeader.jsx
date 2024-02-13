import {
  StArticleHeaderWrapper,
  StArticleHeaderTitle,
  StArticleHeaderBottom
} from './Styles/Article.style';
import { StUpdateBtn, StDeleteBtn } from '../common/styles/Button.style';
import { dateConvertor } from '../../Shared/date';

const ArticleHeader = ({
  category,
  title,
  userNickname,
  createdAt,
  moveToUpdate
}) => {
  return (
    <StArticleHeaderWrapper>
      <span>{category}</span>
      <StArticleHeaderTitle>{title}</StArticleHeaderTitle>
      <StArticleHeaderBottom>
        <span>
          {userNickname} | {dateConvertor(createdAt)}
        </span>
        <div>
          <StUpdateBtn
            $fontSize='14px'
            $width='50px'
            $height='30px'
            onClick={moveToUpdate}>
            수정
          </StUpdateBtn>
          <StDeleteBtn $fontSize='14px' $width='50px' $height='30px'>
            삭제
          </StDeleteBtn>
        </div>
      </StArticleHeaderBottom>
    </StArticleHeaderWrapper>
  );
};

export default ArticleHeader;
