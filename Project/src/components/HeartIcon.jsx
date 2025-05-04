import React from 'react';
import HeartRegular from '../assets/heart-regular.svg';
import HeartSolid from '../assets/heart-solid.svg';
import { useFavorites } from '../hooks/Hooks';

const HeartIcon = ({ movie }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div>
      <img
        src={isFavorite(movie.id) ? HeartSolid : HeartRegular}
        alt="heart"
        width={20}
        height={20}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(movie.id);
        }}
      />
    </div>
  );
};

export default HeartIcon;
