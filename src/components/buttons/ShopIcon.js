import React from 'react';
import './styles/Button.css';
//icons
import { FaShoppingBag } from 'react-icons/fa';

const ShopIcon = ({ search }) => {
  return (
    <li className='book__icon__exp__li'>
      <FaShoppingBag className={`book__icon__shop`} />
      {search ? '' : <p>Voglio acquistarlo</p>}
    </li>
  );
};

export default ShopIcon;
