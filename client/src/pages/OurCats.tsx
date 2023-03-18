import React, {useState} from 'react';
import WebNavHeader from '../components/WebNavHeader';
import OurCatsCSS from "./styles/OurCats.module.css";
import DropDownStyle from "../components/styles/DropDownInfo.module.css"
import DropDownInfo from "../components/DropDownInfo"

const OurCats: React.FC = () => {
  const fontSizeHeader = {fontSize: "20px"}
  const fontSizeSecondaryHeader = {fontSize: "20px"}
  const fontSizeInfo = {fontSize: "26px"}
  const [isDropDownOpen1, setIsDropDownOpen1] = useState(false);
  const [isDropDownOpen2, setIsDropDownOpen2] = useState(false);
  const [isDropDownOpen3, setIsDropDownOpen3] = useState(false);

  //Handle dropdown open/close for firstFemale
  const handleDropDownClick1 = () => {
    setIsDropDownOpen1(!isDropDownOpen1);
  }

  //Handle dropdown open/close for secondFemale
  const handleDropDownClick2 = () => {
    setIsDropDownOpen2(!isDropDownOpen2);
  }

  //Handle dropdown open/close for male
  const handleDropDownClick3 = () => {
    setIsDropDownOpen3(!isDropDownOpen3);
  }

  return (
    <div className={OurCatsCSS.ourCatsPage}>
      <WebNavHeader/>
      <div className={OurCatsCSS.headerContainerOurCats} style={fontSizeHeader}>
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
      <div className={OurCatsCSS.secondaryHeaderContainer} style={fontSizeSecondaryHeader}>
        <h1>Click the photos below to see additional information</h1>
      </div>

      {/* Parent Container */}
      <div className={OurCatsCSS.body}>
        <div className={OurCatsCSS.firstFemaleTitle}>
          <h1>Name 1</h1>
          <p>Female</p>
        </div>
        <div className={OurCatsCSS.secondFemaleTitle}>
          <h1>Name 2</h1>
          <p>Female</p>
        </div>
        <div className={OurCatsCSS.maleTitle}>
          <h1>Hercules</h1>
          <p>Male</p>
        </div>
        
        {/* Buttons for the DropDown info */}
        <div className={DropDownStyle.dropdownContainer}>
          <button 
            className={DropDownStyle.containerBtn} 
            onClick={handleDropDownClick1}><img alt='parentImg1' src={require("../images/Placeholder.png")}/>
          </button>
          <DropDownInfo isOpen={isDropDownOpen1} onClose={handleDropDownClick1} id={1}/>
        </div>
        <div className={DropDownStyle.dropdownContainer}>
          <button 
            className={DropDownStyle.containerBtn} 
            onClick={handleDropDownClick2}><img alt='parentImg2' className={DropDownStyle.containerImg} src={require("../images/Placeholder.png")}/>
          </button>
          <DropDownInfo isOpen={isDropDownOpen2} onClose={handleDropDownClick2} id={2}/>
        </div>
        <div className={DropDownStyle.dropdownContainer}>
          <button 
            className={DropDownStyle.containerBtn} 
            onClick={handleDropDownClick3}><img alt='parentImg3' className={DropDownStyle.containerImg} src={require("../images/Placeholder.png")}/>
          </button>
          <DropDownInfo isOpen={isDropDownOpen3} onClose={handleDropDownClick3} id={3}/>
        </div>

        {/* Links to various records (probably change links to official organizations)*/}
        <a href="https://www.smartpractice.com/Images/Products/PC/PhotoLg/IN06947_Green.jpg" target="_blank" rel='noreferrer'>
        <button className={OurCatsCSS.healthBtn}>Health Records</button>
        </a>
        <a href="https://www.smartpractice.com/Images/Products/PC/PhotoLg/IN06947_Green.jpg" target="_blank" rel='noreferrer'>
        <button className={OurCatsCSS.vaccinationBtn}>Vaccination Records</button>
        </a>
        <a href="https://www.smartpractice.com/Images/Products/PC/PhotoLg/IN06947_Green.jpg" target="_blank" rel='noreferrer'>
        <button className={OurCatsCSS.registrationBtn}>Registration Records</button>
        </a>
      </div>

      {/* Universal Socials Box Footer */}
      <div className={OurCatsCSS.socialsBox}>
          <h1>Checkout our<br></br>Instagram!</h1>
          <a href='https://www.instagram.com/' target="_blank" rel='noreferrer'>
            <button className={OurCatsCSS.instagramBtn}>
              <img alt='instaImg' className={OurCatsCSS.instagramImg} src={require("../images/instagramlogo.png")}/>
            </button>
          </a>
      </div>
    </div>
  )
}

export default OurCats;