import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage.jsx';
import MyPage from '../components/MyPage/MyPage.jsx';
import Posting from '../components/Posting/Posting.jsx';
import ArticlePage from '../pages/ArticlePage.jsx';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/article' element={<MainPage />} />
          <Route path='/myPage' element={<MyPage />} />
          <Route path='/' element={<ArticlePage />} />
          <Route path='/posting' element={<Posting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
