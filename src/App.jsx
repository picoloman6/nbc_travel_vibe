import { useState } from 'react';

import ResetStyles from './App.style.js';
import Modal from './components/Login/Modal.jsx';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const onModalHandler = () => {
    setIsOpen(!isOpen);
    if (isSignUp === true) {
      setIsSignUp(!isSignUp);
    }
  };
  const onSignUpHandler = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <ResetStyles />
      <button onClick={onModalHandler}>버튼</button>
      <Modal
        isOpen={isOpen}
        onModalHandler={onModalHandler}
        isSignUp={isSignUp}
        onSignUpHandler={onSignUpHandler}
      />
    </>
  );
};

export default App;
