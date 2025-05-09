import React from 'react'
import logo from './littlelemon_logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section>
        <div className='company-info'>
          <Link to="/">
          <img src={logo} alt="Logo" />
          </Link>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className='company-details'>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Address: <br/> Koning albertplein, Brussels</li>
              <li>Phone: <br/> + 32 123 45 67 89</li>
              <li>Email: <br/> littlelemon@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href="/">Facebook</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">Twitter</a></li>
            </ul>
          </div>
        </div>
      </section>
      <div className='copyright'>
        <Link to="/" target='_blank'>
          1995 littlelemon, © All rights reserved
        </Link>
      </div>
    </footer>
  )
}

export default Footer