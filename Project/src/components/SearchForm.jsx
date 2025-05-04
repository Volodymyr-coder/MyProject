import React from 'react';
import css from '../css/SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.movie.value.trim();
    if (!query) return;
    onSubmit(query);
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="movie"
          placeholder="Search movie..."
        />
        <button type="submit" className={css.btn}>
          Search movie
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
