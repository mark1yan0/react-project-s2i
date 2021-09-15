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

  return (
    <nav className={`navigation ${scroll && 'navigation__scroll__active'}`}>
      <Link to='/'>
        <h1 id='logo'>A book's good</h1>{' '}
      </Link>
      {/* <img className='nav__logo' /> */}
      <ul className='nav__items'>
        <li>
          <Link to='/'>Home</Link>
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
