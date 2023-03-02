import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import WebNavHeader from '../components/WebNavHeader';
import ContactUsCSS from "./styles/ContactUs.module.css";


const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_gl7djk6', 'template_n8dohwi', form.current, 'Fnz9NuRAzufrPHXEs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };


  
  return (
    
    <><div className={ContactUsCSS.ContactUs}>
      <WebNavHeader />
      <div className={ContactUsCSS.bg}>
        <div className={ContactUsCSS.mainContentContainer}>
          <h1>Contact us</h1>
          <h2>Kingbengals Cattery</h2>
          <p>
            Located in Downtown Sacramento<br></br>
            <br></br>
            Email: KingbengalsCattery@hotmail.com<br></br>
          </p>

          <div className={ContactUsCSS.contactButton}>Get In Touch</div><br></br></div></div></div>
          
          
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form></>
    
  );
};

export default ContactUs;