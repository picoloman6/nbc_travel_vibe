import ResetStyles, { StAppWrapper } from './App.style.js';
import MainPage from './pages/MainPage.jsx';
import MyPage from './components/MyPage/MyPage.jsx';

const App = () => {
  return (
    <StAppWrapper>
      <ResetStyles />
      <MyPage />
    </StAppWrapper>
  );
};

export default App;
