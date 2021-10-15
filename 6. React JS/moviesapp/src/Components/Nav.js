import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <>
      <nav className='nav-class'>
        <Link to='/'>
          <h3>MoviesBox</h3>
        </Link>
        <ul className="List">
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/movies'>
            <li>Movies</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;