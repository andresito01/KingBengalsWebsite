import React from 'react';
import WebNavHeader from '../components/WebNavHeader';
import "./styles/ContactUs.css"

const ContactUs = () => {

  return (
    <div className='ContactUs'>
      <WebNavHeader />
      <div className='bg'>
        <div className='mainContentContainer'>
          <h1>Contact us</h1>
          <h2>Kingbengals Cattery</h2> 
          <p>
            Address:<br></br>
            Phone:<br></br>
            Email<br></br>
          </p> 
          
          <br></br>

        <div className='contactButton'>Get In Touch</div><br></br>
      </div>
      
        <div className='bottomContainer'>
          <div className='additionalInfoContainer'>
            Follow Us on <br></br>
          </div>
        </div>

    </div>
    </div>
  )
}

export default ContactUs;
;