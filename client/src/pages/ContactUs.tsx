import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import WebNavHeader from '../components/WebNavHeader';
import ContactUsCSS from "./styles/ContactUs.module.css"

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p3l5cwr', 'template_n8dohwi', form.current, 'Fnz9NuRAzufrPHXEs')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

    <div className={ContactUsCSS.ContactUs}>
      <WebNavHeader />
      <div className={ContactUsCSS.bg}>
        <div className={ContactUsCSS.mainContentContainer}>
          <h1>Contact us</h1>
          <h2>Kingbengals Cattery</h2> 
          <p>
            Location:Downtown Sacramento<br></br>
            Phone:<br></br>
            Email<br></br>
          </p> 
          
          <br></br>

        <div className={ContactUsCSS.contactButton}>Get In Touch</div><br></br>
      </div>

                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>



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