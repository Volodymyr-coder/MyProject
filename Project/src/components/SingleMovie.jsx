import React, { useEffect, useState } from 'react';
import css from '../css/SingleMovie.module.css';
import HeartIcon from './HeartIcon';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import { fetchSingleMovie } from '../helpers/fetchSingleMovie';

const SingleMovie = ({ movieInfo, onClick }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const numberId = Number(id);
  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        if (!isNaN(id)) {
          const data = await fetchSingleMovie(`${numberId}`);
          setMovie(data);
        } else {
          setMovie(movieInfo);
        }
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [numberId, id, movieInfo]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No product found.</p>;
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  return (
    <li
      className={css.item}
      onClick={() => {
        onClick(movie.id);
      }}
    >
      <img className={css.img} src={imageUrl} alt={movie.title} />
      <div className={css.flex}>
        <div>
          <h2 className={css.title}>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
        <HeartIcon item={movie} />
      </div>
    </li>
  );
};

export default SingleMovie;
