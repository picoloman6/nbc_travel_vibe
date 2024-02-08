import { useState } from 'react';
import MainPage from './pages/MainPage.jsx';
import Article from './pages/Article.jsx';

import ResetStyles, { StAppWrapper } from './App.style.js';
import { MyPage } from './components/MyPage.jsx';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StAppWrapper>
      <ResetStyles />
      <Article />
    </StAppWrapper>
  );
};

export default App;
