import React from 'react';
import css from '../css/SingleMovie.module.css';

const SingleMovie = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;

  return (
    <li className={css.item}>
      <img className={css.img} src={imageUrl} alt={movie.title} />
      <h1 className={css.title}>{movie.title}</h1>
    </li>
  );
};

export default SingleMovie;
