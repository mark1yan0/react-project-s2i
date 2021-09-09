import React, { useState } from 'react';
import './styles/SearchResult.css';
//icons
import { FaHeart } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';

const SearchResult = ({ thumbnail, title, author, category }) => {
  thumbnail =
    'https://images.unsplash.com/photo-1545696648-86c761bc5410?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80';

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
        <h3>{title}Titolo</h3>
        <p>{author} Autore</p>
        <div>
          <p>{category} Categoria</p>
        </div>
      </div>

      <div className='result__icons'>
        <FaHeart
          className={`result__incon__heart ${isFav && 'icon__heart__isFav'}`}
          onClick={() => setIsFav(!isFav)}
        />
        <FaShoppingBag className='result__incon__shopping' />
        <BsFillBookmarkFill
          className={`result__incon__read ${toRead && 'icon__read__toRead'}`}
          onClick={() => setToRead(!toRead)}
        />
      </div>
    </div>
  );
};

export default SearchResult;
