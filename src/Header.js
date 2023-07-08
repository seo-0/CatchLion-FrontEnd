import React from 'react';
import './Header.scss';
import catchlion from './image/catchlion.jpg';

const Header=()=> {
  return (
    <header className="Header">
      <img src={catchlion} alt="LIONImage" />
      <h1>CATCHLION</h1>

      <input type="text" placeholder=" SEARCH and CATCH your JOB!" />
      <input type="button" value="검색" />
    </header>
  );
}

export default Header;
