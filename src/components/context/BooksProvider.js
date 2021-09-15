import React, { useState, useEffect, createContext } from 'react';

import { fetchData } from './api';

export const BooksContext = createContext();

const BooksProvider = props => {
  //books state
  const [books, setBooks] = useState([]);

  // //fetching data

  useEffect(() => {
    //getting books

    async function getBooks() {
      const data = await fetchData('Programming', 'intitle');

      let items = data.data.items;

      if (items === undefined) {
        console.log('no libro');
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
          };
        });

        //filtering out undefiened data
        setBooks(filteredItems);
      }
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
