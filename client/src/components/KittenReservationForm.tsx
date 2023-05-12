import React, { useEffect, useRef, useState } from 'react';
import KittenReservationFormCSS from "./styles/KittenReservationForm.module.css"
import emailjs from '@emailjs/browser';
import { KittensData } from '../admin/context/KittensContext';
import axios from 'axios';

const KittenReservationForm = () => {

  // Get Available Kittens from Firebase
  const { kittenList } = KittensData();
  const availableKittens = kittenList.filter((kitten:any) => kitten.info.status === "available");
  

  // form states
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');
  const [selectedKitten, setSelectedKitten] = useState("")
 

  let emailJSVariables = {
      serviceId: process.env.REACT_APP_SERVICE_ID as string,
      templateID: process.env.REACT_APP_RESERVE_TEMPLATE_ID as string,
      publicKey: process.env.REACT_APP_PUBLIC_KEY as string,
    }
  let googleSheetUrlVariable = {
      googleSheetURL: process.env.REACT_APP_GOOGLE_SHEETS_URL as string,
  }

  const form = useRef<HTMLFormElement>(null);

 //submit event
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
      console.log(name,email,message,selectedKitten);
      const data={
        Name:name,
        Email:email,
        Message:message,
        SelectedKitten:selectedKitten,
        Date:currentDate,
      }
      axios.post(googleSheetUrlVariable.googleSheetURL,data).then((response)=>{
        console.log(response);

        //clearing form fields
        setName('');
        setEmail('');
        setMessage('');
        setSelectedKitten('');
        
      })
    };

  const onOptionChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setSelectedKitten(target.value);
  }

  console.log(availableKittens)
  return (
    <div>
      <form className={KittenReservationFormCSS.formContainer} ref={form} onSubmit={sendEmail}>
        <div className={KittenReservationFormCSS.formTextInputs}>
          <h2 className={KittenReservationFormCSS.formHeader}>Fill Out Entire Form To Reserve A Kitten</h2>

          <label id={KittenReservationFormCSS.formLabel}>Name</label>
          <input id={KittenReservationFormCSS.userName} type="text" 
          placeholder="Enter your name" required className='form-control' name="user_name" 
          onChange={(e)=>setName(e.target.value)} value={name} />

          <label id={KittenReservationFormCSS.formLabel}>Email</label>
          <input id={KittenReservationFormCSS.userEmail} type="email" 
          placeholder="Enter your email address" required className='form-control' name="user_email" 
          onChange={(e)=>setEmail(e.target.value)} value={email} />

          <label id={KittenReservationFormCSS.formLabel}>Message</label>
          <textarea id={KittenReservationFormCSS.userMessage}   
          placeholder="Enter your message" required className='form-control' name="message"
          onChange={(e)=>setMessage(e.target.value)} value={message} />

          <label id={KittenReservationFormCSS.formLabel}>Select The Kitten You Want To Reserve</label>
          <div className={KittenReservationFormCSS.formKittenSelect}>
          
          {availableKittens.map((kitten:any, index:any) => {
            return (
              <div className={KittenReservationFormCSS.availableKittenRadioOption} key={index}>
                <input type='radio' name='kitten' value={kitten.info.name} checked={selectedKitten === kitten.info.name} onChange={onOptionChange}  />
                <div className={KittenReservationFormCSS.availableKittenRadioOptionInner}><label>{kitten.info.name}</label>
                <img alt='Kitten' src={kitten.info.picture} style={{height:100,width:100}} /> </div>
              </div>
            )
          })}
        </div>
          <input id={KittenReservationFormCSS.submitButton} type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  )
}

export default KittenReservationForm;