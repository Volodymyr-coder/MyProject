import React from 'react';
import css from '../css/Layout.module.css';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import SearchForm from './SearchForm';

const Layout = () => {
  const location = useLocation();
  const isMoviesPage = location.pathname.includes('movies');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };
  return (
    <div className={css.pageContent}>
      <div className={css.navContainer}>
        <h1 className={css.title}>{isMoviesPage ? 'Movies' : 'Home'}</h1>
        <SearchForm onSubmit={handleSearch} />
        <nav className={css.navBar}>
          <Link className={css.link} to="/">
            Home
          </Link>
          <Link className={css.link} to="movies">
            Movies
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
