import React from 'react'
import {motion} from 'framer-motion'

import './Header.scss'
import {images} from '../../constants'
import {AppWrap} from '../../Wrapper'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity:[0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{x: [-100,0], opacity: [0,1]}}
      transition={{duration:0.5}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
              {/* <span>👋</span> */}
              <div>
                {/* <p className='p-text'>Hello, I am</p> */}
                <h1 className='head-text' >Yugal</h1>
                <h1 className='head-text'>
                  Kishore
                  <span style={{ color: "var(--secondary-color)"}}>.</span>
                </h1>
              </div>
          </div>

          <div className='tag-cmp app__flex'>
          <p className='p-text'>Game Developer</p>
          <p className='p-text'>Web Developer</p>
          </div>
          <button type="button" className="button-cmp" onClick={()=> window.open('https://drive.google.com/file/d/1vImLPFde00aT13CamF6mmNtXaQ1P0L47/view?usp=drive_link','_blank')}>Resume</button>
        </div>
      </motion.div>

      <motion.div
      whileInView={{opacity: [0,1]}}
      transition={{duration:0.5, delayChildren: 0.5}}
      className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        {/* <motion.img
        whileInView={{scale: [0,1]}}
        transition={{duration:1, ease: 'easeInOut'}}
        className='overlay_circle'
        src={images.circle}
        alt='profile_circle'
        /> */}
      </motion.div>

      {/* <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index)=>(
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div> */}

      <motion.div
        whileInView={{x: [100,0], opacity: [0,1]}}
        transition={{duration:0.5}}
        className='app__header-info'
      >
          <div className='app__header-badge'>
            <div className='quote-cmp app__flex'>
              <p className='p-text'>- Blending code with creativity, I craft interactive experiences that bridge the gap between pixels and pixels, whether in the vast landscapes of the web or the immersive realms of gaming.</p>
            </div>
          </div>
      </motion.div>

    </div>
  )
}

export default AppWrap(Header,'home','app__newPrimbg');
// export default Header