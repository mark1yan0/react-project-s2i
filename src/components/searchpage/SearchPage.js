import React, { useEffect, useState } from 'react';
import { fetchData } from '../context/api';
import './styles/SearchPage.css';
//components
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const SearchPage = () => {
  //state
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  async function searchBooks(e) {
    e.preventDefault();
    let search = document.querySelector('.search__input');
    const data = await fetchData(search.value, 'subject');

    let items = data.data.items;

    if (items === undefined) {
      console.log('Nessun Risultato');
      setNoResults(true);
    } else {
      let filteredItems = items.map(item => {
        return {
          title: item.volumeInfo.title,
          thumbnail: item.volumeInfo.imageLinks.thumbnail,
          author: item.volumeInfo.authors,
          date: item.volumeInfo.publishedDate,
          category: item.volumeInfo.categories,
          description: item.volumeInfo.description,
          id: item.id,
          favourite: false,
          read: false,
        };
      });

      setSearchResults(filteredItems);
      setNoResults(false);
    }
  }

  return (
    <div className='search__page'>
      <section className='search__heading'>
        <h1>Cerca tra la nostra libreria</h1>
        <SearchForm searchBooks={e => searchBooks(e)} />
      </section>
      <section className='search__results'>
        <h3 className='results__title'>Risultati</h3>
        {noResults ? (
          <p className='no__result'>Nessun Risultato</p>
        ) : (
          searchResults.map(result => (
            <SearchResult
              key={result.id}
              thumbnail={result.thumbnail}
              title={result.title}
              author={result.author}
              category={result.category}
              targetBook={result}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default SearchPage;
