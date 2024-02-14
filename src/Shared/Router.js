import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../pages/MainPage.jsx';
import MyPage from '../pages/MyPage.jsx';
import PostingPage from '../pages/PostingPage.jsx';
import ArticlePage from '../pages/ArticlePage.jsx';
import MyArticlesPage from '../pages/MyArticlesPage.jsx';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/myPage' element={<MyPage />} />
          <Route path='/article' element={<ArticlePage />} />
          <Route path='/posting' element={<PostingPage />} />
          <Route path='/myarticle' element={<MyArticlesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
