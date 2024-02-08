import ResetStyles, { StAppWrapper } from './App.style.js';
import MainPage from './pages/MainPage.jsx';
import MyPage from './components/MyPage/MyPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import Modal from './components/Login/Modal.jsx';

const App = () => {
  return (
    <StAppWrapper>
      <ResetStyles />
      <ArticlePage />
      <Modal />
    </StAppWrapper>
  );
};

export default App;
