import React, { useState } from 'react'
import './Contactus.css'
import Mail from '../assets/Mail.png'
import Mobile from '../assets/Mobile.png'
import location from '../assets/location.png'

const Contactus = () => {

  const [data,setData]= useState({

            Name:"",
            Email:"",
            Subject:"",
            message:"",
  })
  const Formdata = (event) =>{
              let {name,value} =event.target;
              setData({
                  ...data,
                  [name]:value

              })
              
  }
  const submit =(e) =>{
    e.preventDefault();
     console.log(
    data
  )
  }
 
  return (
   <div className='Contactus'>
    <div className='Top'>
    <div className='container'>

    <label className='Toplable' >Contact Us</label> 
    <p className='topp'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,<br/>
sed diam nonummy nibh euismod tincidunt ut laoreet</p>

<button className='button'>Home>>Contact Us</button>
    </div>
    <div className='middel'>
        <div className='midleftbox'>
            <lable className="MidLeftBoxLable">
              Let's start <br/>
              Somthing Great!
            </lable>
            <p className='midleftboxp'>Proactively customize cross-media schemas rather than high-payoff the 
            customer service. Uniquely enable extensible niche</p>

            <div className='picon'>
               <div>
                <img src={location} className='iconimg'/>
               </div>
               <div className='icondes'>
               Akshya Nagar 1 Block 1 Cross <br/> 
               Rammurthy Nagar,<br/> Bangalore-560016
               </div>
            </div>

            <div className='picon'>
               <div>
               <img src={Mobile} className='iconimg'/>

               </div>
               <div className='icondesc'>
               +91 1234567890
               </div>
            </div>

            <div className='picon'>
               <div>
               <img src={Mail} className='iconimg'/>
               </div>
               <div className='icondesc'>
                info@gmail.com
               </div>
            </div>
        </div>
          <form className='midrightbox' onSubmit={submit}>
          <label children='Need Help?' className='Formlable' />
          <p className='formp'>Proactively fashion world-class leadership vis-a-vis 
           enterprise e-services. Great strong leadership</p>

          <input placeholder='Name' name='Name' onChange={Formdata}/>
          <input placeholder='Email' name='Email' type='email' onChange={Formdata}  />
          <input placeholder='Subject'name='Subject' onChange={Formdata} />
          <textarea placeholder='Your message' name='message' onChange={Formdata} />
          <button className='btn' type='submit'>
            SEND INQUIRY
          </button>
          </form>
    </div>
    
    <iframe className='map'
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12120.677938818106!2d73.90194101879273!3d18.544557136281355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c220a4234a03%3A0xaacdd60fadf55f2c!2siAssure%20International%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1703820854499!5m2!1sen!2sin" 
     />
    
  </div>
      
</div>
  )
}

export default Contactus
