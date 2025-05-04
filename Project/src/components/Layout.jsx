import React from 'react';
import css from '../css/Layout.module.css';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import SearchForm from './SearchForm';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = location.pathname;

  const isMoviesPage = pathname.includes('movies');
  const isFavoritePage = pathname.includes('favorite');
  const isShowPage = pathname.includes('show');

  const getTitle = () => {
    if (isFavoritePage) return 'Favorite';
    if (isShowPage) return 'Show';
    if (isMoviesPage) return 'Movies';
    return 'Home';
  };

  const handleSearch = (query) => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };
  return (
    <div className={css.pageContent}>
      <div className={css.navContainer}>
        <h1 className={css.title}>{getTitle()}</h1>
        <SearchForm onSubmit={handleSearch} />
        <nav className={css.navBar}>
          <Link className={css.link} to="/">
            HOME
          </Link>
          <Link className={css.link} to="show">
            SHOW
          </Link>
          <Link className={css.link} to="favorite">
            FAVORITE
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
