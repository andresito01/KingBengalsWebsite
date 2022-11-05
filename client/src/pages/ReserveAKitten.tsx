import React from 'react';
import WebNavHeader from '../components/WebNavHeader';
import "./styles/ReserveAKitten.css"
const ReserveAKitten = () => {

  return (
    <div className='reserveAKittenPage'>
      <WebNavHeader />
      <div className='image'>IMAGE OF A CAT</div>
      <div className='header'>How to Reserve a Kitten</div>
    </div>
  )
}

export default ReserveAKitten;