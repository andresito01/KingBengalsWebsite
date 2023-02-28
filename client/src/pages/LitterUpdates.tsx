import React, {useState} from 'react';
import WebNavHeader from '../components/WebNavHeader';
import LitterUpdatesCSS from "./styles/LitterUpdates.module.css";
import Modal from "../components/styles/LitterModal.module.css";
import ModalLitter1 from "../components/LitterModal1";
import ModalLitter2 from "../components/LitterModal2";

const LitterUpdates: React.FC = () => {
  const fontSizeHeader = {fontSize: "50px"};
  const fontSizeParagraph = {fontSize: "25px"};
  const [isModalOpen1, setIsModalOpen1] = useState(false); 
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  //For handling the first litter modal open/close
  const handleOpenModal1 = () => {
    setIsModalOpen1(true);
  }

  const handleCloseModal1 = () => {
    setIsModalOpen1(false);
  }

  //For handling the second litter modal open/close
  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  }

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  }

  return (
    <div className={LitterUpdatesCSS.litterUpdatesPage}>
      <WebNavHeader />
      <div className={LitterUpdatesCSS.litterInstructionContainer}>
        <h1 style={fontSizeHeader}>Check Out Our Litters!</h1>
        <p style={fontSizeParagraph}>Below you will find the information for the litter that are currently available for picking.<br/>Litter planning & info regarding cat pregnancy<br/>Explaining the litter characteristics: range of kittens in each litter<br/>Expected delivery dates will be provided<br/>Please read how to 'Reserve a Kitten' page thoroughly! Kitten photos and videos will be updated bi-weekly.</p>
      </div>
      <div className={LitterUpdatesCSS.parentName1}>Mom Name and Dad Name</div>
      <div className={LitterUpdatesCSS.parentName2}>Mom Name and Dad Name</div>
      <div className={LitterUpdatesCSS.parentCardWrapper}>
        <div className={LitterUpdatesCSS.parentCard}>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent1Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent2Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
        </div>
        <div className={LitterUpdatesCSS.parentCard}>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent1Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent2Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
        </div>
      </div>
      <button className={Modal.containerBtn1} onClick={handleOpenModal1}>
        <div className={LitterUpdatesCSS.litterInfo1}>
          <h1 style={fontSizeHeader}>Litter A</h1>
          <p style={fontSizeParagraph}><b>Total Kittens:</b> 5</p>
          <p style={fontSizeParagraph}><b>Available:</b> 4</p>
          <p style={fontSizeParagraph}><b>Already Sold:</b> 1</p>
          <img alt='litter1image' src={require("../images/Litter1.png")}/>
        </div>
      </button>
      <button className={Modal.containerBtn2} onClick={handleOpenModal2}>
        <div className={LitterUpdatesCSS.litterInfo2}>
          <h1 style={fontSizeHeader}>Litter B</h1>
          <p style={fontSizeParagraph}><b>Total Kittens:</b> 4</p>
          <p style={fontSizeParagraph}><b>Available:</b> 2</p>
          <p style={fontSizeParagraph}><b>Already Sold:</b> 2</p>
          <img alt='litter2image' src={require("../images/Litter2.png")}/>
        </div>
      </button>
      <div className={LitterUpdatesCSS.socialsBox}>
          <h1>Checkout our<br></br>Instagram!</h1>
          <a href='https://www.instagram.com/' target="_blank" rel='noreferrer'>
            <button className={LitterUpdatesCSS.instagramBtn}>
              <img alt='instaImg' className={LitterUpdatesCSS.instagramImg} src={require("../images/instagramlogo.png")}/>
            </button>
          </a>
      </div>
    </div>
  )
}

export default LitterUpdates;