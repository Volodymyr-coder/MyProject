import { URL } from '../constants/constants';

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
