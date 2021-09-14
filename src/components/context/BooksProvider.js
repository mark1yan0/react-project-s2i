import React, { useState, useEffect, createContext } from 'react';

import { fetchData } from './api';
// import { fetchData } from './vendor';

export const BooksContext = createContext();

const BooksProvider = props => {
  //books state
  const [books, setBooks] = useState([]);

  //fetching data

  useEffect(() => {
    //getting books

    async function getBooks() {
      const data = await fetchData('Se questo è un uomo');

      let items = data.data.items;

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

      //filtering out undefiened data
      setBooks(
        filteredItems.filter(
          item => item.thumnail == undefined && item.author !== undefined
        )
      );
    }

    getBooks();
  }, []);

  return (
    <BooksContext.Provider value={[books, setBooks]}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
