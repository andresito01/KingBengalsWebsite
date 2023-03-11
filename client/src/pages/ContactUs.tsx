import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import WebNavHeader from '../components/WebNavHeader';
import ContactUsCSS from "./styles/ContactUs.module.css";
require('dotenv').config()
const ContactUs = () => {

  const form = useRef<HTMLFormElement>(null);
  
  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qczbh6v",
      "template_kkpoh9i",
      form.current!,
      "b0_XUMrx1n8p7oMbQ"
    )
    .then(
      (result) => {
        console.log(result.text)
        console.log("message sent successfully")
      },
      (error) => {
        console.log(error.text)
        console.log("messsage failed to send")
      }
    ) 
  };

  
  return (
    
    <div className={ContactUsCSS.contactUsPage}>
      <WebNavHeader />
      <div className={ContactUsCSS.bg}>
        <div className={ContactUsCSS.mainContentContainer}>
          <h1>Contact Us</h1>
          <p>
            Located in Downtown Sacramento<br></br>
            <br></br>
          </p>
          <form className={ContactUsCSS.formContainer} ref={form} onSubmit={sendEmail}>
            <label id={ContactUsCSS.formLabel}>Name</label>
            <input id={ContactUsCSS.userName} type="text" name="user_name" />
            <label id={ContactUsCSS.formLabel}>Email</label>
            <input id={ContactUsCSS.userEmail} type="email" name="user_email" />
            <label id={ContactUsCSS.formLabel}>Message</label>
            <textarea id={ContactUsCSS.userMessage} name="message" />
            <input id={ContactUsCSS.submitButton} type="submit" value="Send" />
          </form>
        </div>
      </div>
    
    </div>
  );
};

export default ContactUs;