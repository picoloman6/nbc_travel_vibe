import { useState } from 'react';

import ResetStyles from './App.style.js';
import Modal from './components/Login/Modal.jsx';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ResetStyles />
      <button onClick={onModalHandler}>버튼</button>
      <Modal isOpen={isOpen} onModalHandler={onModalHandler} />
    </>
  );
};

export default App;
