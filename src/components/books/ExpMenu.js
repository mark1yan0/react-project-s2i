import React from 'react';
import './styles/ExpMenu.css';
//components
import FavIcon from '../buttons/FavIcon';
import ToReadIcon from '../buttons/ToReadIcon';
import ShopIcon from '../buttons/ShopIcon';

const ExpMenu = ({ targetBook, favourite, read }) => {
  return (
    <div
      className={`book__overlay__expanded ${
        favourite && 'book__overlay__expanded__fav'
      }`}
    >
      <ul className='book__exp__list'>
        <FavIcon favourite={favourite} targetBook={targetBook} />
        <ShopIcon />
        <ToReadIcon targetBook={targetBook} read={read} />
      </ul>
    </div>
  );
};

export default ExpMenu;
