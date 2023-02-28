//import React, {useRef} from 'react';
import WebNavHeader from '../components/WebNavHeader';
import ContactUsCSS from "./styles/ContactUs.module.css"

const ContactUs = () => {

    /*const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };*/

  return (
    <div className={ContactUsCSS.ContactUs}>
      <WebNavHeader />
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