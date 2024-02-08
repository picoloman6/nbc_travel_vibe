import { useState } from 'react';
import Article from './pages/Article.jsx';
import ResetStyles from './App.style.js';
import Posting from './components/Posting/Posting.jsx';
import MainPage from './pages/styles';

const App = () => {
  return (
    <StAppWrapper>
      <ResetStyles />
      <Posting />
    </StAppWrapper>
  );
};

export default App;
