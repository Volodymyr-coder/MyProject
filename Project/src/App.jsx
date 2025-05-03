import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import SingleMoviePage from './pages/SingleMoviePage';
import MoviesPages from './pages/MoviesPages';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPages />} />
        <Route path="movies/movie/:id" element={<SingleMoviePage />} />
        {/* <Route path="favorites" element={<Favorites />} /> */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
