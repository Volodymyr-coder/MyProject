import React, { useEffect, useState } from 'react';
import { SearchMovie } from '../helpers/searchMovie';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SingleMovie from './SingleMovie';
import css from '../css/Search.module.css';

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const navigate = useNavigate();
  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const results = await SearchMovie(query);
        const resultWiyhMediaType = results.map((item) => ({
          ...item,
          media_type: 'movie'
        }));
        setResults(resultWiyhMediaType);
      } catch (error) {
        setError('Error fetching movies');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p className={css.error}>{error}</p>}
      <ul className={css.gridContainer}>
        {results.map((movie) => (
          <SingleMovie
            onClick={() => {
              handleMovieClick(movie.id);
            }}
            key={movie.id}
            movieInfo={movie}
          />
        ))}
      </ul>
    </div>
  );
};

export default Search;
