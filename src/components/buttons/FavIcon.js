import React, { useContext, useState } from 'react';
import './styles/Button.css';
//icons
import { FaHeart } from 'react-icons/fa';
//state
import { LibraryContext } from '../context/LibraryProvider';

const FavIcon = ({ favourite, targetBook, search }) => {
  //fav state
  const [library, setLibrary] = useContext(LibraryContext);
  const [favouriteIcon, setFavouriteIcon] = useState(false);

  function addToFav() {
    let fav = library.filter(item => item.id === targetBook.id);
    //if the book is already in library
    if (fav.length > 0) {
      setLibrary(library.filter(item => item.id !== targetBook.id)); //remove from fav
      setFavouriteIcon(false);
    } else {
      setLibrary(prevBooks => [
        ...prevBooks,
        { ...targetBook, favourite: !targetBook.favourite },
      ]); //add to fav
      setFavouriteIcon(true);
    }
  }

  return (
    <li className='book__icon__exp__li' onClick={() => addToFav()}>
      <FaHeart className={`book__icon__fav ${favourite ? 'is__fav' : ''}`} />
      {search ? (
        ''
      ) : (
        <p>
          {favouriteIcon ? 'Rimuovi dai Preferiti' : 'Aggiungi ai preferiti'}
        </p>
      )}
    </li>
  );
};

export default FavIcon;
