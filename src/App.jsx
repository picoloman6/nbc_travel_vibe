import ResetStyles, { StAppWrapper } from './App.style.js';
import MainPage from './pages/styles';

const App = () => {
  return (
    <StAppWrapper>
      <ResetStyles />
      <MainPage />
    </StAppWrapper>
  );
};

export default App;
