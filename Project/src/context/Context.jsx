import { createContext, useEffect, useState } from 'react';

export const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id, media_type) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (fav) => fav.id === id && fav.media_type === media_type
      );
      if (exists) {
        return prev.filter(
          (fav) => !(fav.id === id && fav.media_type === media_type)
        );
      } else {
        return [...prev, { id, media_type }];
      }
    });
  };

  const isFavorite = (id, media_type) =>
    favorites.some((fav) => fav.id === id && fav.media_type === media_type);

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
