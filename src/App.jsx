import { useState } from 'react';
import ResetStyles, { StAppWrapper } from './App.style.js';
import Posting from './components/Posting/Posting.jsx';
import MainPage from './pages/MainPage.jsx';
import MyPage from './components/MyPage/MyPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import Modal from './components/Login/Modal.jsx';
import MyArticle from './components/MyArticle/MyArticle.jsx';

const App = () => {
  return (
    <StAppWrapper>
      <ResetStyles />
      <MyArticle />
      <Modal />
    </StAppWrapper>
  );
};

export default App;
