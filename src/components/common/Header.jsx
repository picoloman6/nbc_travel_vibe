import {
  StHeader,
  StHeaderWapper,
  StHeaderBtn
} from '../../Styles/Common/Header.style';

const Header = () => {
  return (
    <StHeader>
      <StHeaderWapper>
        <StHeaderBtn>Home</StHeaderBtn>
        <StHeaderBtn>My Blog</StHeaderBtn>
      </StHeaderWapper>
      <StHeaderWapper>
        <StHeaderBtn>Login</StHeaderBtn>
        <StHeaderBtn>O</StHeaderBtn>
      </StHeaderWapper>
    </StHeader>
  );
};

export default Header;
