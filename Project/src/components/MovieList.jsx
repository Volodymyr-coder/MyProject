import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../helpers/fetchData';
import css from '../css/Home.module.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const { results } = await fetchTrendingMovies();
      setMovies(results);
    };
    getMovies();
  }, []);
  return (
    <div className={css.gridContainer}>
      {movies.map((movie) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
        return (
          <li className={css.item} key={movie.id}>
            <img className={css.img} src={imageUrl} alt={movie.title} />
            <h1 className={css.title}>{movie.title}</h1>
          </li>
        );
      })}
    </div>
  );
};

export default MovieList;
