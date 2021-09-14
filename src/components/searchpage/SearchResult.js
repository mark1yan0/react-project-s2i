import React, { useState } from 'react';
import './styles/SearchResult.css';
//icons
import FavIcon from '../buttons/FavIcon';
import ShopIcon from '../buttons/ShopIcon';
import ReadIcon from '../buttons/ReadIcon';

const SearchResult = ({ thumbnail, title, author, category, targetBook }) => {
  //icons starte
  const [isFav, setIsFav] = useState(false);
  const [toRead, setToRead] = useState(false);

  return (
    <div className='result'>
      <img
        className='result__thumbnail'
        src={thumbnail}
        alt={`Immagine di copertina: ${title}`}
      />
      <div className='result__info'>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <p>{category}</p>
        </div>
      </div>

      <div className='result__icons'>
        <FavIcon search={true} targetBook={targetBook} />
        <ShopIcon search={true} />
        <ReadIcon search={true} targetBook={targetBook} />
      </div>
    </div>
  );
};

export default SearchResult;
