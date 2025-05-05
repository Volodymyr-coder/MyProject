import { API_KEY } from '../constants/constants';

export const fetchSingleMovie = async (id) => {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch single movie');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching single movie:', error);
  }
};
