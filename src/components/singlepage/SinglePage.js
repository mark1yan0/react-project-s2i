import React from 'react';
import './style/SinglePage.css';
import { useLocation } from 'react-router-dom';
//icons

const SinglePage = () => {
  const location = useLocation();
  const targetBook = location.state;

  return (
    <div className='single__container'>
      <div className='single__head'>
        <h2 className='single__head__title__mobile'>{targetBook.title}</h2>
        <img
          className='single__head__img'
          src={targetBook.thumbnail}
          alt={targetBook.title}
        />
        <div className='single__head__info'>
          <h2 className='single__head__title'>{targetBook.title}</h2>
          <author className='single__head__author'>
            Autore: {targetBook.author}
          </author>
          <br />
          <p className='single__head__category'>
            Categoria: {targetBook.category}
          </p>{' '}
          <br />
          <p className='single__head__date'>
            Anno di pubblicazione: {targetBook.date}
          </p>{' '}
          <br />
        </div>
      </div>
      <p className='single__sinossi'>{targetBook.description}</p> <br />
    </div>
  );
};

export default SinglePage;
