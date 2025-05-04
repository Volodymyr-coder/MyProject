import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { fetchTrendingTv } from '../helpers/fetchTV';
import css from '../css/ShowList.module.css';

const MovieList = () => {
  const [showTv, setShowTv] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getShow = async () => {
      try {
        setLoading(true);
        setError(null);
        const { results } = await fetchTrendingTv();
        console.log(results);
        setShowTv(results);
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getShow();
  }, []);

  if (loading) return <Loader />;
  if (error) {
    return <p className={css.error}>{error}</p>;
  }

  return (
    <div>
      <h1 className={css.title}>Recommended show to watch</h1>
      <ul className={css.gridContainer}>
        {showTv.map((show) => {
          const imageUrl = `https://image.tmdb.org/t/p/w500${show.backdrop_path}`;
          return (
            <li className={css.item} key={show.id}>
              <img className={css.img} src={imageUrl} alt={show.name} />
              <h2 className={css.title}>{show.name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
