import React from 'react'

import './Navbar.scss'
import {images} from '../../constants'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      {/* why 2 underscores? this is BEM naming methodology. 
      https://www.devbridge.com/articles/implementing-clean-css-bem-method/ */}
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item)=>(
          <li className='app__flex p-text' key={`link-${item}`}>
            <div>
              <a href={`#${item}`}>{item}</a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar