import { useState } from 'react';
import Login from './components/Login/Login';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onLoginHandler = () => {
    setIsOpen(!isOpen);
  };

  const onModalCloseHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={onLoginHandler}>테스트 버튼</button>
      <Login isOpen={isOpen} onModalCloseHandler={onModalCloseHandler} />
    </>
  );
};

export default App;
