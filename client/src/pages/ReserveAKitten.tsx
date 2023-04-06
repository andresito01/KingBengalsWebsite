import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReserveAKittenCSS from "./styles/ReserveAKitten.module.css"
import WebNavHeader from '../components/WebNavHeader';
import Footer from "../components/Footer";
import KittenReservationForm from '../components/KittenReservationForm';

const ReserveAKitten = () => {

    return (
        <div className={ReserveAKittenCSS.reserveAKittenPage}>
            <div className={ReserveAKittenCSS.backgroundLayer}>
                <WebNavHeader />
                <img className={ReserveAKittenCSS.img1} alt='headerImage' src={require("../images/ReserveAKittenHeader.png")} />
                <div className={ReserveAKittenCSS.headerContainerReserve}>
                    <h1 className={ReserveAKittenCSS.underline}>How to Reserve a Kitten</h1>
                    <h3>Please read the entire page before filling out the application</h3>
                    <h3>Non refundable deposit of $150</h3>
                    <h3>Our prices range from $550-$850</h3>
                    <h3>Each kitten is priced individually</h3>
                    <h2>We are now taking applications for Fall 2022 litters!</h2>
                </div>
                <KittenReservationForm />
                <div className={ReserveAKittenCSS.instructionContainer}>
                    <div className={ReserveAKittenCSS.processContainer}>
                        <h3 className={ReserveAKittenCSS.underline}>Process</h3>
                        <p>Read this page fully. Ask any questions. Fill out the application. We will look over it. Approve it. Come see the litters. Pay the reservation fee. Cash? Venmo? Paypal? Prices differ based on color, pattern, and other characteristics of each kitten. Pick-up date will be provided.</p>
                    </div>
                    <div className={ReserveAKittenCSS.paymentContainer}>
                        <h3 className={ReserveAKittenCSS.underline}>Payment</h3>
                        <p>Reservation fee. Full amount due on pick-up day. Cash? Venmo? Paypal? Zelle?</p>
                    </div>
                    <div className={ReserveAKittenCSS.deliveryContainer}>
                        <h3 className={ReserveAKittenCSS.underline}>Delivery</h3>
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