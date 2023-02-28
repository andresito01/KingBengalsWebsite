import React from 'react';
import ContactUsCSS from "./styles/ContactUs.module.css"

const ContactUs = () => {

  return (
    <div className={ContactUsCSS.ContactUs}>
      <div className={ContactUsCSS.bg}>
        <div className={ContactUsCSS.mainContentContainer}>
          <h1>Contact us</h1>
          <h2>Kingbengals Cattery</h2> 
          <p>
            Address:<br></br>
            Phone:<br></br>
            Email<br></br>
          </p> 
          
          <br></br>

        <div className={ContactUsCSS.contactButton}>Get In Touch</div><br></br>
      </div>
      
        <div className={ContactUsCSS.bottomContainer}>
          <div className={ContactUsCSS.additionalInfoContainer}>
            Follow Us on <br></br>
          </div>
        </div>

    </div>
    </div>
  )
}

export default ContactUs;
;