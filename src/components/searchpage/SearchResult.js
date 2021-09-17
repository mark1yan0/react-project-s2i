import React from 'react';
import './styles/SearchResult.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//components
import BookControls from '../buttons/BookControls';

const SearchResult = ({
  thumbnail,
  title,
  author,
  category,
  targetBook,
  type,
}) => {
  return (
    <div className='result'>
      <img
        className='result__thumbnail'
        src={thumbnail}
        alt={`Immagine di copertina: ${title}`}
      />
      <div className='result__info'>
        <Link to={{ pathname: '/singlepage', state: targetBook }}>
          <h3>{title}</h3>
        </Link>

        <p>{author}</p>
        <div>
          <p>{category}</p>
        </div>
        <BookControls type={type} targetBook={targetBook} />
      </div>
    </div>
  );
};

export default SearchResult;
