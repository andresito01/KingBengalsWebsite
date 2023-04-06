import React, { useRef, useState } from 'react';
import KittenReservationFormCSS from "./styles/KittenReservationForm.module.css"
import emailjs from '@emailjs/browser';
import litterupdatesmodaljson from '../json/litterupdatesmodal.json';

const KittenReservationForm = () => {

  const [selectedKitten, setSelectedKitten] = useState("")

  let kittenAvailableOptions = litterupdatesmodaljson.map((litterID) => (
      litterID.kittens.filter((kitten) => kitten.kittenStatus === "Available")
    )).flat(1)

  let emailJSVariables = {
      serviceId: process.env.REACT_APP_SERVICE_ID as string,
      templateID: process.env.REACT_APP_RESERVE_TEMPLATE_ID as string,
      publicKey: process.env.REACT_APP_PUBLIC_KEY as string,
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
    };

  const onOptionChange = (event: React.FormEvent) => {
    const target = event.target as HTMLInputElement;
    setSelectedKitten(target.value);
  }

  return (
    <div>
      <form className={KittenReservationFormCSS.formContainer} ref={form} onSubmit={sendEmail}>
        <div className={KittenReservationFormCSS.formTextInputs}>
          <h2 className={KittenReservationFormCSS.formHeader}>Fill Out Entire Form To Reserve A Kitten</h2>
          <label id={KittenReservationFormCSS.formLabel}>Name</label>
          <input id={KittenReservationFormCSS.userName} type="text" name="user_name" />
          <label id={KittenReservationFormCSS.formLabel}>Email</label>
          <input id={KittenReservationFormCSS.userEmail} type="email" name="user_email" />
          <label id={KittenReservationFormCSS.formLabel}>Message</label>
          <textarea id={KittenReservationFormCSS.userMessage} name="message" />
          <label id={KittenReservationFormCSS.formLabel}>Select The Kitten You Want To Reserve</label>
          <div className={KittenReservationFormCSS.formKittenSelect}>
          {kittenAvailableOptions.map((option, index) => {
            return (
              <div className={KittenReservationFormCSS.availableKittenRadioOption} key={index}>
                <input type='radio' name='kitten' value={option.kittenName} checked={selectedKitten === option.kittenName} onChange={onOptionChange}  />
                <div className={KittenReservationFormCSS.availableKittenRadioOptionInner}><label>{option.kittenName}</label>
                <img alt='Kitten' src={option.kittenPicture} style={{height:100,width:100}} /> </div>
              </div>
            )
          })}
        </div>
          <input id={KittenReservationFormCSS.submitButton} type="submit" value="Send" />
        </div>
      </form>
    </div>
  )
}

export default KittenReservationForm;