import React from 'react';
import css from '../css/Layout.module.css';
import { Outlet, Link, useLocation } from 'react-router-dom';
import SearchForm from './SearchForm';
import { onSearchMovie } from '../helpers/searchMovie';

const Layout = () => {
  const location = useLocation();
  const isFavoritesPage = location.pathname.includes('favorites');
  return (
    <div className={css.pageContent}>
      <div className={css.navContainer}>
        <h1 className={css.title}>
          {isFavoritesPage ? 'Favorites' : 'Movies'}
        </h1>
        <SearchForm onSubmit={onSearchMovie} />
        <nav className={css.navBar}>
          <Link className={css.link} to="/">
            Home
          </Link>
          <Link className={css.link} to="/favorites">
            Favorites
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
