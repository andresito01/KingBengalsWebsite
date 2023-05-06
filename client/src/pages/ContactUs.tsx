import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import WebNavHeader from '../components/WebNavHeader';
import Footer from "../components/Footer";
import ContactUsCSS from "./styles/ContactUs.module.css";
import axios from 'axios';
import NavBarUnderLayer from "../components/NavBarUnderLayer";

const ContactUs = () => {

  // form states
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [message, setMessage]= useState('');

  let emailJSVariables = {
    serviceId: process.env.REACT_APP_SERVICE_ID as string,
    templateID: process.env.REACT_APP_CONTACT_TEMPLATE_ID as string,
    publicKey: process.env.REACT_APP_PUBLIC_KEY as string,
  }

  let googleSheetUrlVariable = {
    googleSheetURL: process.env.REACT_APP_GOOGLE_SHEETS_URL as string,
  }



  const form = useRef<HTMLFormElement>(null);
  
  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();

    emailjs.sendForm(
      emailJSVariables.serviceId,
      emailJSVariables.templateID,
      form.current!,
      emailJSVariables.publicKey
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
    let currentDate = new Date().toLocaleString();
      console.log(name,email,message);
      const data={
        Name:name,
        Email:email,
        Message:message,
        Date:currentDate,
      }
      axios.post(googleSheetUrlVariable.googleSheetURL,data).then((response)=>{
        console.log(response);

        //clearing form fields
        setName('');
        setEmail('');
        setMessage('');
      })
  };
  
  return (
    
    <div className={ContactUsCSS.contactUsPage}>
      <NavBarUnderLayer/>
      <WebNavHeader />
      <div className={ContactUsCSS.bg}>
        <img alt="headerImage" src = {require ("../images/Sacramento-Downtown-Renaissance-Web-Banner (11).png")} width = "1000"/>
        <div className={ContactUsCSS.mainContentContainer}>
          <h3> Contact Us </h3>
          <p>
            Located in Downtown Sacramento<br></br>
            <br></br>
          </p>
          <form className={ContactUsCSS.formContainer} ref={form} onSubmit={sendEmail}>
            <label id={ContactUsCSS.formLabel}>Name</label>
            <input id={ContactUsCSS.userName} type="text" placeholder="Enter your name" required className='form-control' name="user_name"  onChange={(e)=>setName(e.target.value)} />
            <label id={ContactUsCSS.formLabel}>Email</label>
            <input id={ContactUsCSS.userEmail} type="email" placeholder="Enter your email address" required className='form-control' name="user_email"  onChange={(e)=>setEmail(e.target.value)} />
            <label id={ContactUsCSS.formLabel}>Message</label>
            <textarea id={ContactUsCSS.userMessage} placeholder="Enter your message" required className='form-control' name="message" onChange={(e)=>setMessage(e.target.value)} />
            <input id={ContactUsCSS.submitButton} type="submit" value="Send" />
          </form>
        </div>
      </div>
      <Footer/>
    
    </div>
  );
};

export default ContactUs;