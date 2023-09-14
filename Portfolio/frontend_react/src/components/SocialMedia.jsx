import React from 'react'

import {images} from '../constants'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a target="_blank" href="https://www.instagram.com/mr.yugalkishore/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
            <img src={images.instagram} alt="instagram" />
          </a> 
        </div>
        <div>
        <a target="_blank" href="https://github.com/yugalkishore59/">
            <img src={images.github} alt="github" />
          </a>   
        </div>
        <div>
        <a target="_blank" href="https://www.linkedin.com/in/yugalkishore/">
            <img src={images.linkedin} alt="linkedin" />
          </a>      
        </div>
    </div>
  )
}

export default SocialMedia