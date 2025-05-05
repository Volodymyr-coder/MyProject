import { API_KEY } from '../constants/constants';

export const fetchSingleShow = async (id) => {
  try {
    const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch single show');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching single show:', error);
  }
};
