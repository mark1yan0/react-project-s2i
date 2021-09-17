import React, { useState, useEffect } from 'react';
import './styles/Nav.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
//icons
import { FaSistrix } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  //navbar on scroll
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200 && mobileNav === false) {
        setScroll(true);
      } else setScroll(false);

      return () => window.removeEventListener('scroll');
    });
  }, [mobileNav]);

  return (
    <nav className={`navigation ${scroll ? 'navigation__scroll__active' : ''}`}>
      <Link to='/'>
        <h1 id='logo'>A book's good</h1>{' '}
      </Link>
      {mobileNav ? (
        <IoMdClose
          className='nav__items__hamburger'
          onClick={() => setMobileNav(false)}
        />
      ) : (
        <GiHamburgerMenu
          className='nav__items__hamburger'
          onClick={() => setMobileNav(true)}
        />
      )}
      <ul className={`nav__items ${mobileNav && 'nav__items__active'} `}>
        <li>
          <Link onClick={() => setMobileNav(false)} to='/'>
            Home
          </Link>
        </li>
        <li>
          <HashLink
            onClick={() => setMobileNav(false)}
            smooth
            to='/#favourites'
          >
            Preferiti
          </HashLink>
        </li>
        <li>
          <Link onClick={() => setMobileNav(false)} to='/search'>
            <FaSistrix />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
