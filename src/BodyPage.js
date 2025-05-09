
import React from 'react'
import { Link } from 'react-router-dom'
import food from './food.jpg'

const BodyPage = () => {
  return (
    <section className='BodyPage'>
      {/* BodyPage text */}
      <div>
        <h2>Little Lemon</h2>
        <h3>Brussels</h3>
        <img src={food} alt="BodyPage Img" className='BodyPage-img-mobile' />
        <p>We are a family owned Mediterranean restaurant, <br className='mobile-hidden'/>focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking">
          <button aria-label='On Click'>Reserve a table</button>
        </Link>
        {/* BodyPage Image */}
        <img src={food} alt="BodyPage Img" className='BodyPage-img' />
      </div>
    </section>
  )
}

export default BodyPage
