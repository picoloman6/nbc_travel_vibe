import ResetStyles, { StAppWrapper } from './App.style.js';
import MainPage from './pages/MainPage.jsx';
import MyPage from './components/MyPage/MyPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';

const App = () => {
  return (
    <StAppWrapper>
      <ResetStyles />
      <ArticlePage />
    </StAppWrapper>
  );
};

export default App;
