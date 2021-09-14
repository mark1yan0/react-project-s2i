import React from 'react';
import './styles/SearchForm.css';
//icons
import { FaSistrix } from 'react-icons/fa';
//components

const SearchForm = ({ searchBooks }) => {
  return (
    <form onSubmit={searchBooks} className='search__form'>
      <input
        className='search__input'
        type='search'
        placeholder='Cerca'
        id='search'
      />
      <FaSistrix className='search__icon' onClick={searchBooks} />
    </form>
  );
};

export default SearchForm;
