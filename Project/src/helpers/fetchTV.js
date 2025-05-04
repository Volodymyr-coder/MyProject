import { URL_TV } from '../constants/constants';

export const fetchTrendingTv = async () => {
  try {
    const response = await fetch(URL_TV);
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
