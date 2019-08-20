import React from 'react';

const NavBar = ({totalCounters}) => {
  return (
    <nav className='navbar'>
      <div className="navbar-timer-amount-container">
          Timers
          <span
            className="timer-amount"> {totalCounters}
          </span>
      </div>
    </nav>
  )

}


export default NavBar
