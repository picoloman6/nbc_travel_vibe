import { useState } from 'react';
import Login from './components/Login/Login';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>테스트 버튼</button>
      <Login isOpen={isOpen} />
    </>
  );
};

export default App;
