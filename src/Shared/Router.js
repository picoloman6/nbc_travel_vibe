import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage.jsx';
import MyPage from '../pages/MyPage.jsx';
import Posting from '../components/Posting/Posting.jsx';
import ArticlePage from '../pages/ArticlePage.jsx';
import MyArticle from '../components/MyArticle/MyArticle.jsx';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/myPage' element={<MyPage />} />
          <Route path='/article' element={<ArticlePage />} />
          <Route path='/posting' element={<Posting />} />
          <Route path='/myarticle' element={<MyArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
