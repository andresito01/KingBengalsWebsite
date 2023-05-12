//import React, { useRef, useState } from 'react';
//import emailjs from '@emailjs/browser';
import ReserveAKittenCSS from "./styles/ReserveAKitten.module.css";
//import KittenOfInterestDropdown from '../components/KittenOfInterestDropdown';
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
// import KittenReservationForm from '../components/KittenReservationForm';
import NavBarUnderLayer from "../components/NavBarUnderLayer";
//import ReserveKittenStore from "../ReserveKittenStore/ReserveKittenStore";
import KittenReservationForm from "../components/KittenReservationForm";

const ReserveAKitten = () => {
  return (
    <div className={ReserveAKittenCSS.reserveAKittenPage}>
      <div className={ReserveAKittenCSS.backgroundLayer}>
        <WebNavHeader />
        <div className={ReserveAKittenCSS.headerContainer}>
          <div className={ReserveAKittenCSS.headerContainerReserve}>
            <p className={ReserveAKittenCSS.headerReserveTitle}>
              How to Reserve a Kitten
            </p>
            <p>
              <br />
              Please read the entire page before filling out the application!
            </p>
            <p>Non refundable deposit of $150</p>
            <p>Our prices range from $550-$850</p>
            <p>Each kitten is priced individually</p>
            <p>We are now taking applications for Fall 2023 litters!</p>
          </div>
        </div>
        <KittenReservationForm />
        {/* <ReserveKittenStore /> */}
        <div className={ReserveAKittenCSS.instructionContainer}>
          <div className={ReserveAKittenCSS.individualContainer}>
            <h3>
              <u>Process</u>
            </h3>
            <p>
              Read this page fully and feel free ask any questions that you
              might have. Next step would be to fill out the application. We
              will look over it and approve it. You will required to pay the
              reservation fee for each kitten you wish to reserve. Prices differ
              based on color, pattern, and other characteristics of each kitten
              (please refer to 'Litter Updates' page for more info). After that
              you will be invited to come see the available litters/kittens. Go
              home date for each litter will be provided.{" "}
            </p>
          </div>
          <div className={ReserveAKittenCSS.individualContainer}>
            <h3>
              <u>Payment</u>
            </h3>
            <p>
              {" "}
              After filling out the application, you will be required to pay an
              upfront non-refundable reservation fee of $150 per kitten. Full
              amount will be due on the kitten go-home/pick-up day. We prefer
              cash, however if you would like another payment method, such as
              Venmo, Paypal, or Zelle, we might be able to accomodate.{" "}
            </p>
          </div>
          <div className={ReserveAKittenCSS.individualContainer}>
            <h3>
              <u>Delivery</u>
            </h3>
            <p>
              We provide delivery services for kittens on their go home day if
              the new owner is unable to pick-up the kitten on site. Your kitten
              can be shipped on a flight with a handler. The price for this
              service will vary depending on the delivery location. Your kitten
              can also be transported anywhere in the United States mainland.
              Please ask us further for more details and the cost of delivery.
              Just a reminder, we do offer a free pick-up on the go-home day at
              our site in Sacramento, California.
            </p>
          </div>
        </div>
        <div className={ReserveAKittenCSS.additionalInfoContainer}>
          <h3 className={ReserveAKittenCSS.title}> Additional Information </h3>
          <h4>
            Your kitten will come with registration and vaccination documents.
            Please, be sure to carefully read these as you will need to take
            these documents to give over to your vet. There might be some other
            information packets for you to read. There might also be some other
            accessories included in the kitten-pack, such as toys, treats, and
            other goodies. So, be sure to take a proper look!
          </h4>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ReserveAKitten;
