import React, { useContext } from 'react';
import './styles/Row.css';
//state
import { BooksContext } from '../context/BooksProvider';
import { FavouriteContext } from '../context/FavouriteProvider';
//components
import Book from './Book';

const Row = ({ title, type }) => {
  //book state
  const [books, setBooks] = useContext(BooksContext);
  //library state
  const { favourites } = useContext(FavouriteContext);

  return (
    <section id={type === 'favourites' ? 'favourites' : ''} className='row'>
      <h2>{title}</h2>
      <div className='row__container'>
        {type === 'favourites' ? (
          favourites.length !== 0 ? (
            favourites.map(item => (
              <Book
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                author={item.author}
                category={item.category}
                targetBook={item}
                type={type}
              />
            ))
          ) : (
            <h3>Al momento non ci sono preferiti</h3>
          )
        ) : (
          books.map(book => (
            <Book
              key={book.id}
              thumbnail={book.thumbnail}
              title={book.title}
              author={book.author}
              category={book.category}
              targetBook={book}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Row;
