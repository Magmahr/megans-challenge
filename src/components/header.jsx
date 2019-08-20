import React from 'react';
import Logo from '../assets/logo'
import Challenge from '../assets/challenge'

const Header = () => {
  return (
    <nav className='header-container'>
      <div className="header wrapper">
        <Logo />
        <Challenge />
      </div>
    </nav>
  )

}


export default Header
