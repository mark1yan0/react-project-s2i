import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const BooksContext = createContext();

const BooksProvider = props => {
  //books state
  const [books, setBooks] = useState([]);

  const key = 'AIzaSyAFlyQmxsFmIm1Ut3ku_xrAMLPB8CJVS6k';
  //per la query
  let query = 'Harry Potter';
  const api = `https://www.googleapis.com/books/v1/volumes?q=${query}+subject:&maxResults=10&printType=books&key=${key}`;

  //fetching data
  async function fetchData() {
    try {
      const data = await axios.get(api);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //getting books
    async function getBooks() {
      const data = await fetchData();

      let items = data.data.items;

      let filteredItems = items.map(item => {
        return {
          title: item.volumeInfo.title,
          thumbnail: item.volumeInfo.imageLinks.thumbnail,
          author: item.volumeInfo.authors[0],
          date: item.volumeInfo.publishedDate,
          category: item.volumeInfo.categories[0],
          description: item.volumeInfo.description,
          id: item.id,
          favourite: false,
          read: false,
        };
      });
      setBooks(filteredItems);
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
