import React from 'react';
import './styles/SearchForm.css';
//icons
import { FaSistrix } from 'react-icons/fa';
//components

const SearchForm = () => {
  return (
    <form className='search__form'>
      <div className='search__form__input'>
        <input
          className='search__input'
          type='search'
          placeholder='Cerca'
          id='search'
        />
        <FaSistrix className='search__icon' />
      </div>
      <select className='category__filter' name='category'>
        <option selected>Categoria</option>
        <option>Categoria 1</option>
        <option>Categoria 2</option>
        <option>Categoria 3</option>
      </select>
    </form>
  );
};

export default SearchForm;
