import React from 'react';
import WebNavHeader from '../components/WebNavHeader';
import "./styles/OurCats.css"
const OurCats = () => {
  const fontSizeHeader = {fontSize: "20px"} //change if need be (Wesley)
  const fontSizeSecondaryHeader = {fontSize: "20px"}
  const fontSizeInfo = {fontSize: "20px"}


  return (
    <div className='ourCatsPage'>
      <WebNavHeader />
      <div className='headerContainer' style={fontSizeHeader}>
        <h1>OUR CATS</h1>
        <h2 style={fontSizeInfo}>
          We believe in quality genetics and pay close attention to our breeding program to ensure 
          those quality results we strive for. We provide our cats with the best care and nutrition 
          possible. We give them lots of love and affection so they feel right at home.
        </h2>
        <h3 style={fontSizeInfo}>
          Treatment and care is given to our cats to boost energy, behavior, and quality of life.
        </h3>
      </div>
      <div className='secondaryHeaderContainer' style={fontSizeSecondaryHeader}>
        <h1>Click on photos below to see additional information</h1>
      </div>
      <div className='body'>
        <div className='firstFemaleTitle' style={fontSizeSecondaryHeader}>
          <h1>Name 1</h1>
          <h2>Female</h2>
        </div>
        <div className='secondFemaleTitle' style={fontSizeSecondaryHeader}>
          <h1>Name 2</h1>
          <h2>Female</h2>
        </div>
        <div className='maleTitle' style={fontSizeSecondaryHeader}>
          <h1>Hercules</h1>
          <h2>Male</h2>
        </div>
        <img alt='firstFemaleImage1' src={require("../images/Placeholder.png")}/>
        <img alt='secondFemaleImage1' src={require("../images/Placeholder.png")}/>
        <img alt='maleImage1' src={require("../images/Placeholder.png")}/>

        <img alt='firstFemaleImage2' src={require("../images/Placeholder.png")}/>
        <img alt='secondFemaleImage2' src={require("../images/Placeholder.png")}/>
        <img alt='maleImage2' src={require("../images/Placeholder.png")}/>

        <img alt='firstFemaleImage3' src={require("../images/Placeholder.png")}/>
        <img alt='secondFemaleImage3' src={require("../images/Placeholder.png")}/>
        <img alt='maleImage3' src={require("../images/Placeholder.png")}/>
        <div className='healthBox'>
          <h1>Health Certificates</h1>
        </div>
        <div className='vaccinationBox'>
          <h1>Vaccination Records</h1>
        </div>
        <div className='registrationBox'>
          <h1>Registration Records</h1>
        </div>
      </div>
      <div className='socialsBox'>
          <h1>Follow us on</h1>
        </div>
    </div>
  )
}

export default OurCats;