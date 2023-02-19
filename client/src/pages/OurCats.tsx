import React, {useState} from 'react';
import ModalFemale1 from '../components/ModalFemale1';
import ModalFemale2 from '../components/ModalFemale2';
import ModalMale from '../components/ModalMale';
import WebNavHeader from '../components/WebNavHeader';
import "./styles/OurCats.css"

const OurCats: React.FC = () => {
  const fontSizeHeader = {fontSize: "20px"}
  const fontSizeSecondaryHeader = {fontSize: "20px"}
  const fontSizeInfo = {fontSize: "26px"}
  const fontSizeBtn = {fontSize: "30px"}
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  
  //For handling the first female modal open/close
  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  }

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  }

  //For handling the second female modal open/close
  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  }

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  }

  //For handling the male modal open/close
  const handleOpenModal3 = () => {
    setIsModalOpen3(true);
  }

  const handleCloseModal3 = () => {
    setIsModalOpen3(false);
  }

  return (
    <div className='ourCatsPage'>
      <ModalFemale1 isOpen={isModalOpen1} onClose={handleCloseModal1}/>
      <ModalFemale2 isOpen={isModalOpen2} onClose={handleCloseModal2}/>
      <ModalMale isOpen={isModalOpen3} onClose={handleCloseModal3}/>
      <WebNavHeader />
      <div className='headerContainerOurCats' style={fontSizeHeader}>
        <h1>Meet The Parents!</h1>
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
        <h1>Click the photos below to see additional information</h1>
        <h2>V</h2>
      </div>
      <div className='body'>
        <div className='firstFemaleTitle' style={fontSizeSecondaryHeader}>
          <h1>Name 1</h1>
          <p className='gender' style={fontSizeInfo}>Female</p>
        </div>
        <div className='secondFemaleTitle' style={fontSizeSecondaryHeader}>
          <h1>Name 2</h1>
          <p className='gender' style={fontSizeInfo}>Female</p>
        </div>
        <div className='maleTitle' style={fontSizeSecondaryHeader}>
          <h1>Hercules</h1>
          <p className='gender' style={fontSizeInfo}>Male</p>
        </div>
        
        <button 
          className='imageBtn' 
          onClick={handleOpenModal1}><img alt='firstFemaleImage' src={require("../images/Placeholder.png")}/>
        </button>

        <button 
          className='imageBtn' 
          onClick={handleOpenModal2}><img alt='secondFemaleImage' src={require("../images/Placeholder.png")}/>
        </button>

        <button 
          className='imageBtn' 
          onClick={handleOpenModal3}><img alt='maleImage' src={require("../images/Placeholder.png")}/>
        </button>

        <a href="https://www.smartpractice.com/Images/Products/PC/PhotoLg/IN06947_Green.jpg" target="_blank" rel='noreferrer'>
        <button className='healthBtn' style={fontSizeBtn}>Health Records</button>
        </a>
        <a href="https://www.smartpractice.com/Images/Products/PC/PhotoLg/IN06947_Green.jpg" target="_blank" rel='noreferrer'>
        <button className='vaccinationBtn' style={fontSizeBtn}>Vaccination Records</button>
        </a>
        <a href="https://www.smartpractice.com/Images/Products/PC/PhotoLg/IN06947_Green.jpg" target="_blank" rel='noreferrer'>
        <button className='registrationBtn' style={fontSizeBtn}>Registration Records</button>
        </a>
      </div>
      <div className='socialsBox'>
          <h1>Checkout our<br></br>Instagram!</h1>
          <a href='https://www.instagram.com/' target="_blank" rel='noreferrer'>
            <button className='instagramBtn'>
              <img alt='instaImg' className='instagramImg' src={require("../images/instagramlogo.png")}/>
            </button>
          </a>
      </div>
    </div>
  )
}

export default OurCats;