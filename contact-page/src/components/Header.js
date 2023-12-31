import React from 'react'
import Navbar from './Navbar'
import './Header.css'
import phoneimg from '../assets/phone.png'
import mailimg from '../assets/mail.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className='Header'>
      <div className='top' >
            <li> 
            <FontAwesomeIcon icon="fa-sharp fa-thin fa-location-dot" />
            {/* <img src={phoneimg}/> */}
            +91 1234567890</li>
            <li>
              {/* <img src={mailimg} /> */}
            info@gmail.com</li>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header
