//import React, { useRef, useState } from 'react';
//import emailjs from '@emailjs/browser';
import ReserveAKittenCSS from "./styles/ReserveAKitten.module.css"
//import KittenOfInterestDropdown from '../components/KittenOfInterestDropdown';
import WebNavHeader from '../components/WebNavHeader';
import Footer from "../components/Footer";
import KittenReservationForm from '../components/KittenReservationForm';

const ReserveAKitten = () => {

    return (
        <div className={ReserveAKittenCSS.reserveAKittenPage}>
            <div className={ReserveAKittenCSS.backgroundLayer}>
                <WebNavHeader />
                <div className={ReserveAKittenCSS.headerContainer}>
                    <div className={ReserveAKittenCSS.headerContainerReserve}>
                        <p className={ReserveAKittenCSS.underline}>How to Reserve a Kitten</p>
                        <p>Please read the entire page before filling out the application</p>
                        <p>Non refundable deposit of $150</p>
                        <p>Our prices range from $550-$850</p>
                        <p>Each kitten is priced individually</p>
                        <p>We are now taking applications for Fall 2023 litters!</p>
                    </div>
                </div>
                <KittenReservationForm />
                <div className={ReserveAKittenCSS.instructionContainer}>
                    <div className={ReserveAKittenCSS.individualContainer}>
                        <h3><u>Process</u></h3>
                        <p>Read this page fully. Ask any questions. Fill out the application. We will look over it. Approve it. Come see the litters. Pay the reservation fee. Cash? Venmo? Paypal? Prices differ based on color, pattern, and other characteristics of each kitten. Pick-up date will be provided.</p>
                    </div>
                    <div className={ReserveAKittenCSS.individualContainer}>
                        <h3><u>Payment</u></h3>
                        <p>Reservation fee. Full amount due on pick-up day. Cash? Venmo? Paypal? Zelle?</p>
                    </div>
                    <div className={ReserveAKittenCSS.individualContainer}>
                        <h3><u>Delivery</u></h3>
                        <p>We provide delivery services for kittens on their go home day if the new owner is unable to pick-up the kitten on site. Your kitten can be shipped on a flight with a handler. The price for this service is $$$. Your kitten can also be transported anywhere in the United States mainland. The price for this is service is $$$. Just a reminder, we offer a free pick-up at our site in California.</p>
                    </div>
                </div>
                <div className={ReserveAKittenCSS.additionalInfoContainer}>
                    <h3 className={ReserveAKittenCSS.underline}>Additional information</h3>
                    <p>Your kitten will come with Registration? Vaccination? Other documents? Kitten-pack? Toys? Other goodies?</p>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default ReserveAKitten;