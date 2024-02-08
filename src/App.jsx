import { useState } from 'react';
import Article from './pages/Article.jsx';
import ResetStyles, { StAppWrapper } from './App.style.js';
import Posting from './components/Posting/Posting.jsx';

const App = () => {
  return (
    <StAppWrapper>
      <ResetStyles />
      <Posting />
    </StAppWrapper>
  );
};

export default App;
