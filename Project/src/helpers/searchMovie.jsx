import { API_KEY, URL_SEARCH } from '../constants/constants';

export const SearchMovie = async (query) => {
  try {
    const url = `${URL_SEARCH}?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
