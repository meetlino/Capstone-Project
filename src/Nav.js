import React, { useState } from 'react'


const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className='navbar'>
      {/* Mobile Nav hamburger */}
      <div className='menu-icon' onClick={toggleMenu}>
        <div className='hamburger-bar'></div>
        <div className='hamburger-bar'></div>
        <div className='hamburger-bar'></div>
      </div>

      {/* Nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order_online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav