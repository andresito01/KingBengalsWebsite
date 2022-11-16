import React from 'react';
import WebNavHeader from '../components/WebNavHeader';
import "./styles/ReserveAKitten.css"
const ReserveAKitten = () => {

  return (
    <div className='reserveAKittenPage'>
      <WebNavHeader />
      <img alt='headerImage' src={require("../images/ReserveAKittenHeader.png")} />
      <div className='headerContainer'>
        <h1>How to Reserve a Kitten</h1>
        <h3>Please read the entire page before filling out the application</h3>
        <h3>Our prices range from $$$-$$$$</h3>
        <h3>Each kitten is priced individually</h3>
        <h2>We are now taking applications for Fall 2022 litters!</h2>
      </div>
      <div className='applyButton'>APPLY HERE</div>
      <div className='instructionContainer'>
        <div className='processContainer'>
          <h3>Process</h3>
          <p>Read this page fully. Ask any questions. Fill out the application. We will look over it. Approve it. Come see the litters. Pay the reservation fee. Cash? Venmo? Paypal? Prices differ based on color, pattern, and other characteristics of each kitten. Pick-up date will be provided.</p>
        </div>
        <div className='paymentContainer'>
          <h3>Payment</h3>
          <p>Read this page fully. Ask any questions. Fill out the application. We will look over it. Approve it. Come see the litters. Pay the reservation fee. Cash? Venmo? Paypal? Prices differ based on color, pattern, and other characteristics of each kitten. Pick-up date will be provided.</p>
        </div>
        <div className='deliveryContainer'>
          <h3>Delivery</h3>
          <p>Read this page fully. Ask any questions. Fill out the application. We will look over it. Approve it. Come see the litters. Pay the reservation fee. Cash? Venmo? Paypal? Prices differ based on color, pattern, and other characteristics of each kitten. Pick-up date will be provided.</p>
        </div>
      </div>
      <div className='additionalInfoContainer'>
          <h3>Additional information</h3>
          <p>Your kitten will come with Registration? Vaccination? Other documents? Kitten-pack? Toys? Other goodies?</p>
      </div>
    </div>
  )
}

export default ReserveAKitten;