import React, { useEffect, useState } from 'react';
import { useFavorites } from '../hooks/Hooks';
import { useNavigate } from 'react-router-dom';
import { fetchSingleMovie } from '../helpers/fetchSingleMovie';
import css from '../css/FavoriteMovie.module.css';
import HeartIcon from './HeartIcon';
import SingleMovie from './SingleMovie';

const FavoriteMovie = () => {
  const { favorites } = useFavorites();
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [error, setError] = useState(null);
  console.log(error);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const requests = favorites.map((id) => fetchSingleMovie(`${id}`));
        const data = await Promise.all(requests);
        setMovies(data);
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error);
      }
    };
    fetchFavorites();
  }, [favorites]);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={css.container}>
      <ul className={css.gridContainer}>
        {movies.map((movie) => (
          <SingleMovie
            onClick={handleMovieClick}
            key={movie.id}
            movieInfo={movie}
          />
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMovie;
