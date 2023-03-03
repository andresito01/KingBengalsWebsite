import React from 'react';
import ReserveAKittenCSS from "./styles/ReserveAKitten.module.css"
import WebNavHeader from '../components/WebNavHeader';

const ReserveAKitten = () => {

  return (
    <div className={ReserveAKittenCSS.reserveAKittenPage}>
//<<<<<<< ReserveAKittenPage
      <div className={ReserveAKittenCSS.backgroundLayer}>
      <WebNavHeader />
=======
      
//>>>>>>> master
      <img className={ReserveAKittenCSS.img1} alt='headerImage' src={require("../images/ReserveAKittenHeader.png")} />
      
        <div className={ReserveAKittenCSS.headerContainerReserve}>
          <h1 className={ReserveAKittenCSS.underline}>How to Reserve a Kitten</h1>
          <h3>Please read the entire page before filling out the application</h3>
          <h3>Our prices range from $$$-$$$$</h3>
          <h3>Each kitten is priced individually</h3>
          <h2>We are now taking applications for Fall 2022 litters!</h2>
        </div>
        <div className={ReserveAKittenCSS.applyButton}>APPLY HERE</div>
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