import React from 'react';
import css from '../css/Layout.module.css';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isFavoritesPage = location.pathname.includes('favorites');
  return (
    <div className={css.pageContent}>
      <div className={css.navContainer}>
        <h1 className={css.title}>
          {isFavoritesPage ? 'Favorites' : 'Movies'}
        </h1>
        <nav className={css.navBar}>
          <Link className={css.link} to="/">
            Movies
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
