import React from 'react';
import Nav from './Nav';
import Form from './Form';

function Header() {
  return (
    <header className='header'>
      <Nav/>
      <h1 className='header__title'>Find perfect hotel rooms which fits you</h1>
      <Form/>
    </header>
  );
}

export default Header;
