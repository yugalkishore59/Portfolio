//higher order components

import React from 'react'
import {NavigationDots, SocialMedia} from '../components'
const AppWrap = (Component, idName, classNames) => function HOC(){
    // HOC stands for higher order component
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className='app__wrapper app__flex'>
            <Component/>

            <div className='copyright'>
                <p className='p-text' style={{color: 'rgba(255,255,255,0.2)'}}>
                    2023 YUGAL KISHORE
                </p>
                <p className='p-text' style={{color: 'rgba(255,255,255,0.2)'}}>
                    All rights reserved
                </p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap;