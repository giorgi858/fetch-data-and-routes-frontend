import { Routes, Route, useNavigate } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import ArticleListPage from './Pages/ArticleListPage';
import ArticlePage from './Pages/ArticlePage';
import NotFoundPage from './Pages/NotFoundPage';
import Layout from './Components/Layout';

const App = () => {
  const navigate = useNavigate()
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
            <Route path="article">
              <Route index element={<ArticleListPage />} />
              <Route path=":id" element={<ArticlePage/>}/>
            </Route>  
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
