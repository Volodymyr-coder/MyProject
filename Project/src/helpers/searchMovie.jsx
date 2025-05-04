import { API_KEY, URL_SEARCH } from '../constants/constants';

export const onSearchMovie = async (query) => {
  try {
    const response = await fetch(
      `${URL_SEARCH}?query=${encodeURIComponent(
        query
      )}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
