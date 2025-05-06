import React from 'react';
import HeartRegular from '../assets/heart-regular.svg';
import HeartSolid from '../assets/heart-solid.svg';
import { useFavorites } from '../hooks/Hooks';

const HeartIcon = ({ item }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div>
      <img
        src={isFavorite(item.id, item.media_type) ? HeartSolid : HeartRegular}
        alt="heart"
        width={20}
        height={20}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(item.id, item.media_type);
        }}
      />
    </div>
  );
};

export default HeartIcon;
