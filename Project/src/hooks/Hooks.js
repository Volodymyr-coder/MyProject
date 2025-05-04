import { useContext } from 'react';
import { FavoriteContext } from '../context/Context';

export const useFavorites = () => useContext(FavoriteContext);
