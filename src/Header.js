import React from 'react'
import logo from './littlelemon_logo.png'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='header-wrapper'>
        <Link to="/">
          <img src={logo} alt="Logo" width={250} height={80}/>
        </Link>
        <Nav/>
      </div>
    </header>
  )
}

export default Header