import {
  StHeader,
  StHeaderBtnWapper,
  StHeaderBtn
} from '../../Styles/Components/Header.style';

const Header = () => {
  return (
    <StHeader>
      <StHeaderBtnWapper>
        <StHeaderBtn>Home</StHeaderBtn>
        <StHeaderBtn>My Blog</StHeaderBtn>
      </StHeaderBtnWapper>
      <StHeaderBtnWapper>
        <StHeaderBtn>Login</StHeaderBtn>
        <StHeaderBtn>O</StHeaderBtn>
      </StHeaderBtnWapper>
    </StHeader>
  );
};

export default Header;