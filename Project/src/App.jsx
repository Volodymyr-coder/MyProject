import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import SingleMoviePage from './pages/SingleMoviePage';
import ShowPage from './pages/ShowPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import SearchPage from './pages/SearchPage';
import FavoriteMoviePage from './pages/FavoriteMoviePage';
import SingleShowPage from './pages/SingleShowPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="show" element={<ShowPage />} />
        <Route path="movie/:id" element={<SingleMoviePage />} />
        <Route path="show/:id" element={<SingleShowPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="favorite" element={<FavoriteMoviePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
