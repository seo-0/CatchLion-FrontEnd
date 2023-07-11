import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import catchlion from './image/catchlion.jpg';

const Header = () => {
  return (
    <header className="Header">
      <img src={catchlion} alt="LIONImage" />
      <Link style={{ textDecorationLine: 'none' }} to="/">
        <h1>CATCHLION</h1>
      </Link>

      <input type="text" placeholder=" SEARCH and CATCH your JOB!" />
      <input type="button" value="검색" />

      <Link style={{ textDecorationLine: 'none' }} to="/Login">
        <button>LOG IN</button>
      </Link>
    </header>
  );
};

export default Header;
