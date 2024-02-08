import ResetStyles, { StAppWrapper } from './App.style.js';
import MainPage from './pages/MainPage.jsx';

const App = () => {
  return (
    <StAppWrapper>
      <ResetStyles />
      <MainPage />
    </StAppWrapper>
  );
};

export default App;
