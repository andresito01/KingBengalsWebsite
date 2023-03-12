import React, {useState} from 'react';
import WebNavHeader from '../components/WebNavHeader';
import LitterUpdatesCSS from "./styles/LitterUpdates.module.css";
import ModalStyle from "../components/styles/LitterModal.module.css"
import Modal1 from "../components/LitterModal1"
import Modal2 from "../components/LitterModal2"

const LitterUpdates: React.FC = () => {
  const fontSizeHeader = {fontSize: "50px"};
  const fontSizeParagraph = {fontSize: "25px"};
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  //Handle Modal 1 open/close
  const handleModalOpen1 = () => {
    setIsModalOpen1(true);
  }
  const handleModalClose1 = () => {
    setIsModalOpen1(false);
  }

  //Handle Modal 2 open/close
  const handleModalOpen2 = () => {
    setIsModalOpen2(true);
  }
  const handleModalClose2 = () => {
    setIsModalOpen2(false);
  }

  return (
    <div className={LitterUpdatesCSS.litterUpdatesPage}>
      <Modal1 isOpen={isModalOpen1} onClose={handleModalClose1}/>
      <Modal2 isOpen={isModalOpen2} onClose={handleModalClose2}/>
      <WebNavHeader/>
      <div className={LitterUpdatesCSS.litterInstructionContainer}>
        <h1 style={fontSizeHeader}>Check Out Our Litters!</h1>
        <p style={fontSizeParagraph}>Below you will find the information for the litter that are currently available for picking.<br/>Litter planning & info regarding cat pregnancy<br/>Explaining the litter characteristics: range of kittens in each litter<br/>Expected delivery dates will be provided<br/>Please read how to 'Reserve a Kitten' page thoroughly! Kitten photos and videos will be updated bi-weekly.</p>
      </div>
      
      <div className={LitterUpdatesCSS.parentCardWrapper}>
        <div className={LitterUpdatesCSS.parentCard}>
          <div className={LitterUpdatesCSS.parentName}>Mom</div>
          <div className={LitterUpdatesCSS.parentName}>Dad</div>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent1Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent2Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
        </div>
        <div className={LitterUpdatesCSS.parentCard}>
          <div className={LitterUpdatesCSS.parentName}>Mom</div>
          <div className={LitterUpdatesCSS.parentName}>Dad</div>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent1Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent2Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
        </div>
      </div>

      {/* Containers for the two litters */}
      <div className={LitterUpdatesCSS.litterWrapper}>
        <button className={ModalStyle.containerBtn} onClick={handleModalOpen1}>
          <div className={LitterUpdatesCSS.litterInfo}>
            <div>
              <h1><b>Litter A</b></h1>
              <p><b>Total Kittens:</b> 5</p>
              <p><b>Available:</b> 4</p>
              <p><b>Already Sold:</b> 1</p>
            </div>
            <img alt='litter1image' src={require("../images/Litter1.png")}/>
          </div>
        </button>
        <button className={ModalStyle.containerBtn} onClick={handleModalOpen2}>
          <div className={LitterUpdatesCSS.litterInfo}>
            <div>
              <h1>Litter B</h1>
              <p><b>Total Kittens:</b> 4</p>
              <p><b>Available:</b> 2</p>
              <p><b>Already Sold:</b> 2</p>
            </div>
            <img alt='litter2image' src={require("../images/Litter2.png")}/>
          </div>
        </button>
      </div>

      {/* Universal Socials Box Footer */}
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