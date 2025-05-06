import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { fetchTrendingTv } from '../helpers/fetchTV';
import css from '../css/ShowList.module.css';
import SingleShow from './SingleShow';
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
  const [shows, setShow] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getShow = async () => {
      try {
        setLoading(true);
        setError(null);
        const { results } = await fetchTrendingTv();
        setShow(results);
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getShow();
  }, []);

  const handleShowClick = (id) => {
    navigate(`/show/${id}`);
  };

  if (loading) return <Loader />;
  if (error) {
    return <p className={css.error}>{error}</p>;
  }

  return (
    <div>
      <h1 className={css.title}>Recommended show to watch</h1>
      <ul className={css.gridContainer}>
        {shows.map((show) => (
          <SingleShow key={show.id} showInfo={show} onClick={handleShowClick} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
