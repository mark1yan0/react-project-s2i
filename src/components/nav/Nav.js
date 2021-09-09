import React, { useState, useEffect } from 'react';
import './styles/Nav.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//icons
import { FaSistrix } from 'react-icons/fa';
//components

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  //navbar on scroll
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else setScroll(false);

      return () => window.removeEventListener('scroll');
    });
  }, []);

  function showLibrary() {
    let library = document.querySelector('.library');

    if (library.classList.contains('library__active')) {
      library.classList.remove('library__active');
    } else {
      library.classList.add('library__active');
    }
  }

  return (
    <nav className={`navigation ${scroll && 'navigation__scroll__active'}`}>
      <Link to='/'>
        <h1 id='logo'>Logo</h1>{' '}
      </Link>
      {/* <img className='nav__logo' /> */}
      <ul className='nav__items'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li onClick={showLibrary}>
          <p className='nav__library'>Libreria</p>
        </li>
        <li>
          <Link to='/search'>
            <FaSistrix />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
