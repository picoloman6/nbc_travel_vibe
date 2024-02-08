import { useState } from 'react';
import Login from './components/Login/Login';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={onModalHandler} style={{ backgroundColor: 'yellow' }}>
        테스트 버튼
      </button>
      <Login isOpen={isOpen} onModalHandler={onModalHandler} />
    </>
  );
};

export default App;
