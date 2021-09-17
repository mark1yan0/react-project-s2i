import React from 'react';
import './styles/Book.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//components
import BookControls from '../buttons/BookControls';

const Book = ({ thumbnail, title, author, category, targetBook, type }) => {
  function truncate(str, n) {
    //tronca testo dopo n lettere
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <div className='book'>
      <img className='book__thumbnail' src={thumbnail} alt='thumbnail' />

      <div className='book__overlay'>
        <Link to={{ pathname: '/singlepage', state: targetBook }}>
          <h3>{truncate(title, 30)}</h3>
        </Link>
        <p>{author}</p>
        <p id='book__category'>{category}</p>
        <BookControls type={type} targetBook={targetBook} />
      </div>
    </div>
  );
};

export default Book;
