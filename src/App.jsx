import ResetStyles, { StAppWrapper } from './App.style.js';
import Posting from './components/Posting/Posting.jsx';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/Login/Modal.jsx';
import Router from './Shared/Router.js';

const App = () => {
  return (
    <StAppWrapper>
      <ResetStyles />
      <Router />
      <Modal />
    </StAppWrapper>
  );
};

export default App;
