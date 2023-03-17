import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReserveAKittenCSS from "./styles/ReserveAKitten.module.css"
import KittenOfInterestDropdown from '../components/KittenOfInterestDropdown';
import WebNavHeader from '../components/WebNavHeader';

const ReserveAKitten = () => {


    const [selectedKittenValues, setSelectedKittenValues] = useState('')

    const kittenSelectOptions = [
        { value: "green", label: "Green" },
        { value: "blue", label: "Blue" },
        { value: "red", label: "Red" },
        { value: "yellow", label: "Yellow" },
        { value: "orange", label: "Orange" },
        { value: "pink", label: "Pink" },
        { value: "purple", label: "Purple" },
        { value: "grey", label: "Grey" }
      ];

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

    return (
        <div className={ReserveAKittenCSS.reserveAKittenPage}>
            <div className={ReserveAKittenCSS.backgroundLayer}>
                <WebNavHeader />
                <img className={ReserveAKittenCSS.img1} alt='headerImage' src={require("../images/ReserveAKittenHeader.png")} />
                <div className={ReserveAKittenCSS.headerContainerReserve}>
                    <h1 className={ReserveAKittenCSS.underline}>How to Reserve a Kitten</h1>
                    <h3>Please read the entire page before filling out the application</h3>
                    <h3>Our prices range from $$$-$$$$</h3>
                    <h3>Each kitten is priced individually</h3>
                    <h2>We are now taking applications for Fall 2022 litters!</h2>
                </div>

                <form className={ReserveAKittenCSS.formContainer} ref={form} onSubmit={sendEmail}>
                    <div className={ReserveAKittenCSS.formTextInputs}>
                        <label id={ReserveAKittenCSS.formLabel}>Name</label>
                        <input id={ReserveAKittenCSS.userName} type="text" name="user_name" />
                        <label id={ReserveAKittenCSS.formLabel}>Email</label>
                        <input id={ReserveAKittenCSS.userEmail} type="email" name="user_email" />
                        <label id={ReserveAKittenCSS.formLabel}>Message</label>
                        <textarea id={ReserveAKittenCSS.userMessage} name="message" />
                        <input id={ReserveAKittenCSS.submitButton} type="submit" value="Send" />
                        
                    </div>
                    <div className={ReserveAKittenCSS.formKittenSelect}>
                    <KittenOfInterestDropdown isSearchable isMulti placeHolder="Select..." options={kittenSelectOptions} onChange={(value:any) => {
                                setSelectedKittenValues(value)
                                var str = selectedKittenValues.toString();
                                console.log(str);
                            } 
                        }/>
                    </div>
                </form>

                <div className={ReserveAKittenCSS.instructionContainer}>
                    <div className={ReserveAKittenCSS.processContainer}>
                        <h3 className={ReserveAKittenCSS.underline}>Process</h3>
                        <p>Read this page fully.<br />Ask any questions.<br />Fill out the application.<br />We will look over it.<br />Approve it.<br />Come see the litters.<br />Pay the reservation fee.<br />Cash? Venmo? Paypal?<br />Prices differ based on<br />color, pattern, and other<br />characteristics of each<br />kitten.<br />Pick-up date will be<br />provided.</p>
                    </div>
                    <div className={ReserveAKittenCSS.paymentContainer}>
                        <h3 className={ReserveAKittenCSS.underline}>Payment</h3>
                        <p>Reservation fee.<br />Full amount due on<br />pick-up day.<br />Cash? Venmo?<br />Paypal? Zelle?</p>
                    </div>
                    <div className={ReserveAKittenCSS.deliveryContainer}>
                        <h3 className={ReserveAKittenCSS.underline}>Delivery</h3>
                        <p>We provide delivery<br />services for kittens on<br />their go home day if the<br />new owner is unable to<br />pick-up the kitten on site.<br />Your kitten can be<br />shipped on a flight with a<br />handler. The price for this<br />service is $$$. Your kitten<br />can also be transported<br />anywhere in the United<br />States mainland. The<br />price for this is service is<br />$$$. Just a reminder, we<br />offer a free pick-up at our<br />site in California.</p>
                    </div>
                </div>
                <div className={ReserveAKittenCSS.additionalInfoContainer}>
                    <h3 className={ReserveAKittenCSS.underline}>Additional information</h3>
                    <p>Your kitten will come with Registration? Vaccination? Other documents? Kitten-pack? Toys? Other goodies?</p>
                </div>
            </div>
        </div>
    )
}

export default ReserveAKitten;