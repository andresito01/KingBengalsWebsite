import React, { useState } from "react";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
import LitterUpdatesCSS from "./styles/LitterUpdates.module.css";
import ModalStyle from "../components/styles/LitterModal.module.css";
import Modal from "../components/LitterModal";
import { jsonData } from "../components/LitterModal";
import NavBarUnderLayer from "../components/NavBarUnderLayer";

const LitterUpdates: React.FC = () => {
  const fontSizeHeader = { fontSize: "50px" };
  const fontSizeParagraph = { fontSize: "20px" };
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  //Handle Modal 1 open/close
  const handleModalOpen1 = () => {
    setIsModalOpen1(true);
  };
  const handleModalClose1 = () => {
    setIsModalOpen1(false);
  };

  //Handle Modal 2 open/close
  const handleModalOpen2 = () => {
    setIsModalOpen2(true);
  };
  const handleModalClose2 = () => {
    setIsModalOpen2(false);
  };

  return (
    <div className={LitterUpdatesCSS.litterUpdatesPage}>
      <Modal isOpen={isModalOpen1} onClose={handleModalClose1} id={1} />
      <Modal isOpen={isModalOpen2} onClose={handleModalClose2} id={2} />
      <NavBarUnderLayer/>
      <WebNavHeader />
      <div className={LitterUpdatesCSS.litterInstructionContainer}>
        <h1 style={fontSizeHeader}>Check Out Our Litters!</h1>
        <p style={fontSizeParagraph}>
          Below you will find information about each kitten within a litter.
          <br />
          Each parent of a litter can be seen, for more information about the 
          parents please checkout 'Our Cats' page.
          <br />
          Clicking either of the Litter containers below will bring up information 
          regarding the posted litter, such as their birth date, availability, and price.
          <br />
          Each kitten's specific characteristics will be provided once they are atlest a week old
          along with an image regerding their coat pattern/colors, etc.
          <br />
          If you see a kitten you like, please see our 'Reserve a Kitten' page 
          to place a request.
        </p>
      </div>
      
      {/* <div className={LitterUpdatesCSS.parentCardWrapper}>
        //Container for the first litter parents
        //jsonData[0] is used because litter 1 is at index 0 in the json file
        <div className={LitterUpdatesCSS.parentCard}>
          <div className={LitterUpdatesCSS.parentName}>Mom</div>
          <div className={LitterUpdatesCSS.parentName}>Dad</div>
          <img
            className={LitterUpdatesCSS.parentImage}
            alt="parentImage"
            src={jsonData[0].momPicture}
          />
          <img
            className={LitterUpdatesCSS.parentImage}
            alt="parentImage"
            src={jsonData[0].dadPicture}
          />
        </div>
        //Container for the second litter parents
        //jsonData[1] is used because litter 2 is at index 1 in the json file
        <div className={LitterUpdatesCSS.parentCard}>
          <div className={LitterUpdatesCSS.parentName}>Mom</div>
          <div className={LitterUpdatesCSS.parentName}>Dad</div>
          <img
            className={LitterUpdatesCSS.parentImage}
            alt="parentImage"
            src={jsonData[1].momPicture}
          />
          <img
            className={LitterUpdatesCSS.parentImage}
            alt="parentImage"
            src={jsonData[1].dadPicture}
          />
        </div>
      </div> */}

      {/* Containers for the two litters */}
      <div className={LitterUpdatesCSS.litterWrapper}>
        <button className={ModalStyle.containerBtn} onClick={handleModalOpen1}>
          <div className={LitterUpdatesCSS.litterInfo}>
            <div>
              {/* jsonData[0] is used because litter 1 is at index 0 in the json file */}
              <h1>
                <b>
                  <u>{jsonData[0].litterName}</u>
                </b>
              </h1>
              <p>
                <b>Total Kittens: </b>
                {jsonData[0].totalKittens}
              </p>
              <p>
                <b>Available: </b>
                {jsonData[0].availableKittens}
              </p>
              <p>
                <b>Already Sold: </b>
                {jsonData[0].soldKittens}
              </p>
              <p>
                <b>Price: $650 - $800</b>
                {/*jsonData[0].price2*/}
              </p>
            </div>
            <img alt="litter1image" src={jsonData[0].litterPicture} />
          </div>
        </button>
        <button className={ModalStyle.containerBtn} onClick={handleModalOpen2}>
          <div className={LitterUpdatesCSS.litterInfo}>
            <div>
              {/* jsonData[1] is used because litter 2 is at index 1 in the json file */}
              <h1>
                <b>
                  <u>{jsonData[1].litterName}</u>
                </b>
              </h1>
              <p>
                <b>Total Kittens: </b>
                {jsonData[1].totalKittens}
              </p>
              <p>
                <b>Available: </b>
                {jsonData[1].availableKittens}
              </p>
              <p>
                <b>Already Sold: </b>
                {jsonData[1].soldKittens}
              </p>
              <p>
                <b>Price: $600 - $850</b>
                {/*jsonData[1].price1*/}
              </p>
            </div>
            <img alt="litter2image" src={jsonData[1].litterPicture} />
          </div>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default LitterUpdates;
