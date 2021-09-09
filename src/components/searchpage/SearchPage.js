import React from 'react';
import './styles/SearchPage.css';
//components
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const SearchPage = () => {
  return (
    <div>
      <section className='search__heading'>
        <h1>Cerca tra la nostra libreria</h1>
        <SearchForm />
      </section>
      <section className='search__results'>
        <h3>Risultati</h3>
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </section>
    </div>
  );
};

export default SearchPage;
