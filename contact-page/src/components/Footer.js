import React from 'react'
import Twiter from '../assets/Twiter.png';
import linkedin from '../assets/linkedin.png'
import Browser from '../assets/Browser.png'
import Share from '../assets/Share.png'
import './Footer.css'
const Footer = () => {
  return (
               <>
    <div className='main'>
        <span >
                <h4>Follow Us</h4>
                
           <div className='siconp' >
                  <img src={linkedin} className='sicon'/>
                  <img src={Share} className='sicon'/>
                  <img src={Twiter} className='sicon'/>
                 
           </div>
           <div className='icont'>
           <img src={Browser} className='sicon'/>
                  <p className='iconp'>https://compony.com</p>
           </div>
        </span>
        <span>
               <h4>Our Services</h4>
               
           <li>Lorem ipsum dolor</li>
           <li>Lorem ipsum dolor</li>
           <li>Lorem ipsum dolor</li>
        </span>
        <span>
           <li>Lorem ipsum dolor</li>
           <li>Lorem ipsum dolor</li>
           <li>Lorem ipsum dolor</li>
        </span>
        <span>
            <h4>GET IN TOUCH</h4>
               <p>Akshya Nagar 1st Block 1st Cross,<br/>
                  Rammurthy Nagar,<br/> Bangalore-560016<br/>
                  ______________________________________<br/>
                  Phone : +91 12345 67890<br/>
                  Email : info@company.com</p>
        </span>
         
          </div>
          <div className='copyright'>
           <p> Copyright 2023 iAssureIT All Rights Reserved</p>
           <p> Designed & Developed By iAssureIT International Technologies Pvt. Ltd
               <p></p>
           </p>
         </div>
          </>

      
  )
}

export default Footer;
