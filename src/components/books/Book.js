import React, { useState } from 'react';
import './styles/Book.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//icons
import { BsThreeDots } from 'react-icons/bs';
//components
import ExpMenu from './ExpMenu';

const Book = ({
  thumbnail,
  title,
  author,
  category,
  targetBook,
  favourite,
  read,
}) => {
  //menu state
  const [showMenu, setShowMenu] = useState(false);

  function truncate(str, n) {
    //tronca testo dopo n lettere
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <div className={`book ${favourite && 'book__fav'}`}>
      <img
        className={`book__thumbnail ${favourite && 'book__thumbnail__fav'}`}
        src={thumbnail}
        alt='thumbnail'
      />
      <div className=''>
        {showMenu && (
          <ExpMenu targetBook={targetBook} favourite={favourite} read={read} />
        )}
        <div className={`book__overlay ${favourite && 'book__overlay__fav'}`}>
          <div
            className={`book__overlay__text ${
              favourite && 'book__overlay__text__fav'
            }`}
          >
            <Link to='/singlepage'>
              <h3>{truncate(title, 30)}</h3>
            </Link>
            <p>{author}</p>
            <p id={`book__category ${favourite && 'book__category__fav'}`}>
              {category}
            </p>
          </div>
          <BsThreeDots
            className={`book__icon__expand ${showMenu && 'keep__shown'}`}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
