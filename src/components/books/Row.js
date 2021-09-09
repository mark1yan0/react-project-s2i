import React, { useContext } from 'react';
import './styles/Row.css';
//state
import { BooksContext } from '../context/BooksProvider';
//components
import Book from './Book';

const Row = ({ title }) => {
  //book state
  const [books, setBooks] = useContext(BooksContext);

  return (
    <section className='row'>
      <h2>{title}</h2>
      <div className='row__container'>
        {books.map(book => (
          <Book
            key={book.id}
            thumbnail={book.thumbnail}
            title={book.title}
            author={book.author}
            category={book.category}
            targetBook={book}
          />
        ))}
      </div>
    </section>
  );
};

export default Row;
