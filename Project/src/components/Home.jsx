import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../helpers/fetchData';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const { results } = await fetchTrendingMovies();
      setMovies(results);
    };
    getMovies();
  }, []);
  return (
    <div>
      {movies.map((movie) => {
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
        return (
          <ul>
            <li key={movie.id}>
              <img src={imageUrl} alt={movie.title} />
              <h1>{movie.title}</h1>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Home;
