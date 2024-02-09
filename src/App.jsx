import ResetStyles, { StAppWrapper } from './App.style.js';
import Posting from './components/Posting/Posting.jsx';
import Modal from './components/Login/Modal.jsx';

const App = () => {
  return (
    <StAppWrapper>
      <ResetStyles />
      <Posting />
      <Modal />
    </StAppWrapper>
  );
};

export default App;
