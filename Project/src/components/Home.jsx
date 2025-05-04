import React, { useEffect, useState } from 'react';
import SingleMovie from './SingleMovie';
import Loader from './Loader';
import { fetchTrendingMovies } from '../helpers/fetchMovies';

import css from '../css/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const { results } = await fetchTrendingMovies();
        setMovies(results);
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  if (loading) return <Loader />;
  if (error) {
    return <p className={css.error}>{error}</p>;
  }
  return (
    <>
      <h1 className={css.title}>Recommended movies to watch</h1>

      <ul className={css.gridContainer}>
        {movies.map((movie) => (
          <SingleMovie key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default Home;
