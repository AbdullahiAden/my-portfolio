import React from 'react'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../hooks/useMediaQuery'

import { images } from '../constants'

const Navbar = () => {
  return (
    
  <nav className="bg-white border-gray-300 ">
  <div className="container flex flex-wrap items-center justify-between mx-auto ">
    <a href="">
        <img src={images.logoWhite} className='h-12 w-12 p sm:h-16 '  alt="logo"  />
    </a>

    <div>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            
            
        </ul>
        

    </div>


    
    
    
  </div>
  </nav>

  )
}

export default Navbar