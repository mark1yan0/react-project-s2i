import React, { useContext } from 'react';
import './styles/Button.css';
//icons
import { BsFillBookmarkFill } from 'react-icons/bs';
//state
import { LibraryContext } from '../context/LibraryProvider';

const ReadIcon = ({ targetBook, read, search }) => {
  //library context
  const [library, setLibrary] = useContext(LibraryContext);

  function addToRead() {
    let fav = library.filter(item => item.id === targetBook.id);

    if (fav.length === 0) {
      setLibrary(prevBooks => [
        ...prevBooks,
        {
          ...targetBook,
          read: !targetBook.read,
          favourite: !targetBook.favourites,
        },
      ]); //add to raed
    } else {
      setLibrary(library.filter(item => item.id !== targetBook.id)); //remove from fav //#1 removes the filtered book
      setLibrary(prevBooks => [
        //#2 adds the book
        ...prevBooks,
        {
          ...targetBook,
          read: !targetBook.read,
          favourite: !targetBook.favourites,
        },
      ]); //this way i will update the book's read
    }
  }

  return (
    <li className='book__icon__exp__li' onClick={() => addToRead()}>
      <BsFillBookmarkFill
        className={`book__icon__read ${read && 'book__read'} `}
      />
      {search ? '' : <p>{read ? 'Letto' : 'Segna come letto'}</p>}
    </li>
  );
};

export default ReadIcon;
