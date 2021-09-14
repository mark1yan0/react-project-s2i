import React, { useContext } from 'react';
import './styles/ExpMenu.css';
//components
import FavIcon from '../buttons/FavIcon';
import ReadIcon from '../buttons/ReadIcon';
import ShopIcon from '../buttons/ShopIcon';
import { BooksContext } from '../context/BooksProvider';

const ExpMenu = ({ targetBook, favourite, read }) => {
  const [favouriteIcon, setFavouriteIcon] = useContext(BooksContext);

  return (
    <div
      className={`book__overlay__expanded ${
        favourite && 'book__overlay__expanded__fav'
      }`}
    >
      <ul className='book__exp__list'>
        <FavIcon favourite={favourite} targetBook={targetBook} />
        <ShopIcon />
        <ReadIcon targetBook={targetBook} read={read} />
      </ul>
    </div>
  );
};

export default ExpMenu;
