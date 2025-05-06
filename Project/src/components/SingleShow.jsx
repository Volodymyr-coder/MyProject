import React, { useEffect, useState } from 'react';
import css from '../css/SingleMovie.module.css';
import HeartIcon from './HeartIcon';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import { fetchSingleShow } from '../helpers/fetchSingleTV';

const SingleShow = ({ showInfo, onClick }) => {
  const { id } = useParams();
  const [show, setShow] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const numberId = Number(id);
  useEffect(() => {
    const getShow = async () => {
      try {
        setLoading(true);
        if (!isNaN(id)) {
          const data = await fetchSingleShow(`${numberId}`);
          console.log(data);
          setShow(data);
        } else {
          setShow(showInfo);
        }
      } catch (error) {
        setError('Something went wrong. Please try again...');
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getShow();
  }, [numberId, id, showInfo]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!show) return <p>No product found.</p>;
  const imageUrl = `https://image.tmdb.org/t/p/w500${show.backdrop_path}`;

  return (
    <li
      className={css.item}
      onClick={() => {
        onClick(show.id);
      }}
    >
      <img className={css.img} src={imageUrl} alt={show.name} />
      <div className={css.flex}>
        <div>
          <h2 className={css.title}>{show.name}</h2>
          <p>{show.overview}</p>
        </div>
        <HeartIcon item={show} />
      </div>
    </li>
  );
};

export default SingleShow;
