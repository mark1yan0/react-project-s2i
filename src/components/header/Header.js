import React, { useContext, useState, useEffect } from 'react';
import './styles/Header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//context
import { BooksContext } from '../context/BooksProvider';
//components
import Button from '../buttons/Button';

const Header = () => {
  //state
  const [books, setBooks] = useContext(BooksContext);
  const [hero, setHero] = useState([]);

  //get random book effect
  useEffect(() => {
    setHero(books[Math.floor(Math.random() * books.length)]);
  }, [books]);

  function truncate(str, n) {
    //tronca testo dopo n lettere
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <header>
      <div className='header__book__container'>
        <img
          className='header__book__thumbnail'
          src={hero !== undefined ? hero.thumbnail : 'loading'}
          alt={hero !== undefined ? hero.title : 'loading'}
        />
      </div>
      <div className='header__info'>
        <h1>Consigli</h1>
        <h2>{hero !== undefined && hero.title} </h2>
        <p>{hero !== undefined && truncate(hero.description, 150)}</p>
        <div className='header__buttons'>
          <Link to='/singlepage'>
            <Button type='button' text='Interessante...' />{' '}
          </Link>
          <Button
            event={() =>
              setHero(books[Math.floor(Math.random() * books.length)])
            }
            type='button'
            text='Mostra Altro'
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
