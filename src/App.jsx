import { useState } from 'react';

import ResetStyles from './App.style.js';
import Login from './components/Login/Login.jsx';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ResetStyles />
      <button onClick={onModalHandler}>버튼</button>
      <Login isOpen={isOpen} onModalHandler={onModalHandler} />
    </>
  );
};

export default App;
