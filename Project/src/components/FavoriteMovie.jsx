// import React, { useEffect, useState } from 'react';
// import { useFavorites } from '../hooks/Hooks';
// import { useNavigate } from 'react-router-dom';
// import { fetchSingleMovie } from '../helpers/fetchSingleMovie';
// import css from '../css/FavoriteMovie.module.css';
// import HeartIcon from './HeartIcon';
// import SingleMovie from './SingleMovie';
// import { fetchSingleShow } from '../helpers/fetchSingleTV';

// const FavoriteMovie = () => {
//   const { favorites } = useFavorites();
//   const [movies, setMovies] = useState([]);
//   console.log(movies);
//   const [error, setError] = useState(null);
//   console.log(error);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const fetchFavorites = async () => {
//       try {
//         const requests = favorites.map(({ id, type }) => {
//           if (type === 'movie') return fetchSingleMovie(id);
//           if (type === 'tv') return fetchSingleShow(id);
//           return null;
//         });
//         const results = await Promise.all(requests);
//         const validItems = results.filter((item) => item && item.id);

//         setMovies(validItems);
//       } catch (error) {
//         setError('Something went wrong. Please try again...');
//         console.log(error);
//       }
//       if (favorites.length > 0) {
//         fetchFavorites();
//       } else {
//         setMovies([]);
//       }
//     };
//   }, [favorites]);

//   const handleMovieClick = (id) => {
//     navigate(`/movie/${id}`);
//   };

//   const handleShowClick = (id) => {
//     navigate(`/show/${id}`);
//   };

//   return (
//     <div className={css.container}>
//       <ul className={css.gridContainer}>
//         {movies.map((item) =>
//           item.name ? (
//             <SingleShow
//               key={item.id}
//               showInfo={item}
//               onClick={() => handleShowClick(item.id)}
//             />
//           ) : (
//             <SingleMovie
//               key={item.id}
//               movieInfo={item}
//               onClick={() => handleMovieClick(item.id)}
//             />
//           )
//         )}
//       </ul>
//     </div>
//   );
// };

// export default FavoriteMovie;

import React, { useEffect, useState } from 'react';
import { useFavorites } from '../hooks/Hooks';
import { useNavigate } from 'react-router-dom';
import { fetchSingleMovie } from '../helpers/fetchSingleMovie';
import { fetchSingleShow } from '../helpers/fetchSingleTV';
import css from '../css/FavoriteMovie.module.css';
import SingleMovie from './SingleMovie';
import SingleShow from './SingleShow';

const FavoriteMovie = () => {
  const { favorites } = useFavorites();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const requests = favorites.map(({ id, media_type }) => {
          if (media_type === 'movie') return fetchSingleMovie(id);
          if (media_type === 'tv') return fetchSingleShow(id);
          return null;
        });

        const results = await Promise.all(requests);
        const validItems = results
          .map((item, index) => {
            if (!item) return null;
            return { ...item, media_type: favorites[index].media_type };
          })
          .filter((item) => item && item.id && item.media_type);

        setMovies(validItems);
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error);
      }
    };

    if (favorites.length > 0) {
      fetchFavorites();
    } else {
      setMovies([]);
    }
  }, [favorites]);

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const handleShowClick = (id) => {
    navigate(`/show/${id}`);
  };

  if (error) {
    return <p className={css.error}>{error}</p>;
  }

  return (
    <div className={css.container}>
      <ul className={css.gridContainer}>
        {movies.map((item) =>
          item.name ? (
            <SingleShow
              key={item.id}
              showInfo={item}
              onClick={() => handleShowClick(item.id)}
            />
          ) : (
            <SingleMovie
              key={item.id}
              movieInfo={item}
              onClick={() => handleMovieClick(item.id)}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default FavoriteMovie;
