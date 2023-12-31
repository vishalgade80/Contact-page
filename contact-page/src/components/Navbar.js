import React from 'react';
import './Navbar.css'
// import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
<div className='Navbar'>
    <label className='logo'>Logo</label>
    <ul>
      <li>
      HOME
      {/* <Link to ="/">HOME</Link> */}
      
      </li>
      <li>ABOUT</li>
      <li>SERVICES</li>
      <li>TESTIMONIALS</li>
      <li>BLOGS</li>
      <li>
      CONTACT
      {/* <Link to="/Contact"  >CONTACT</Link> */}
      </li>
    </ul>
</div>
  )
}

export default Navbar
