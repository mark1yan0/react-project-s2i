import React, { useContext } from 'react';
import { FavouriteContext } from '../context/FavouriteProvider';
//Icons
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { BsBookmarkFill } from 'react-icons/bs';

const BookControls = ({ type, targetBook }) => {
  const {
    addBookToFavourites,
    removeBookFromFavourites,
    favourites,
    setBookAsRead,
    setBookAsNotRead,
    read,
  } = useContext(FavouriteContext);
  let favouriteBook = favourites.find(book => book?.id === targetBook?.id);
  let readBook = read.find(book => book?.id === targetBook?.id);

  const favDisabled = favouriteBook ? true : false;
  const bookRead = readBook ? true : false;
  return (
    <>
      {type === 'favourites' ? (
        <div className='controls__container'>
          <AiFillHeart
            className='fav__control'
            onClick={() => removeBookFromFavourites(targetBook.id)}
            title='Rimuovi dai preferiti'
          />
          {bookRead ? (
            <BsBookmarkFill
              className='read__control'
              onClick={() => setBookAsNotRead(targetBook.id)}
              title='Segna come non letto'
            />
          ) : (
            <BsBookmark
              className='read__control'
              onClick={() => setBookAsRead(targetBook)}
              title='Segna come letto'
            />
          )}
        </div>
      ) : (
        <div className='controls__container'>
          {favDisabled ? (
            <AiFillHeart
              className='fav__control'
              onClick={() => removeBookFromFavourites(targetBook.id)}
              title='Rimuovi dai preferiti'
            />
          ) : (
            <AiOutlineHeart
              className='fav__control'
              onClick={() => addBookToFavourites(targetBook)}
              title='Aggiungi ai preferiti'
            />
          )}
        </div>
      )}
    </>
  );
};

export default BookControls;
