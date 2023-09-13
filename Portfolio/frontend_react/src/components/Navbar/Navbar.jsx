import React, { useState } from 'react'

import './Navbar.scss'
import {images} from '../../constants'
import {HiMenuAlt4, HiX } from 'react-icons/hi'
import {motion} from 'framer-motion'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      {/* why 2 underscores? this is BEM naming methodology. 
      https://www.devbridge.com/articles/implementing-clean-css-bem-method/ */}
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills','testimonial', 'contact'].map((item)=>(
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
              <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={()=> setToggle(true)}/>

          {
            toggle && (
              <motion.div
              whileInView={{x:[300,0]}} //this is going to take 300px
              transition={{duration:0.85,ease: 'easeOut'}} //animation
              >
                <HiX onClick={()=> setToggle(false)}/>
                <ul>
                  {['home', 'about', 'work', 'skills', 'contact'].map((item)=>(
                    <li key={item}>
                      <a onClick={()=> setToggle(false)} href={`#${item}`}>{item}</a>
                    </li>
                  ))} 
                </ul>
              </motion.div>
            )
          }
      </div>
    </nav>
  )
}

export default Navbar