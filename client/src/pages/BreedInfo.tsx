import React from "react";
import BreedInfoCSS from "./styles/BreedInfo.module.css";
import topImage from "../images/SpottedVsMarbled.png";
import spotted from "../images/SpottedBengals.png";
import marbled from "../images/MarbledBengals.png";
import redstar from "../images/1024px-Paintedcats_Red_Star_standing.jpg";

const BreedInfo = () => {
  return (
    <div className="breedInfoPage">
      <div className='backgroundLayer'>
        <div className = "bengalsIntroContainer">
        <img className = "bengalsIntroPic" src={redstar} alt="" />
          <div className = "bengalsIntroText"><br /><br />
          The Bengal breed of cats gets their name from the Asian leopard cat, 
          taxonomic name: <i>Prionailurus bengalensis</i>, from which they 
          are bred together with domestic cat breeds and usually again with
          cat breeds that have a more friendly nature. <br/><br/>
          With their appearance of a miniature leopard, the initial goal was to 
          produce a cat breed to serve as an alternative to keeping wild cats as 
          pets. Bengals are strikingly known for being the only domestic cat 
          breed to feature "rosette" or spotted markings, though their fur can
          sport an assortment of different kinds of patterns.
          </div>
        </div>
      </div>
      <BreedInfoTopPic />
      <div className="bottomContainer">
        <img src = {spotted} alt="" style={{float:"left", width:500 }} />
        <img src = {marbled} alt="" style={{float:"right", width:500 }} />
      </div>
    </div>
  );
};

const BreedInfoTopPic = () => {
  return (
    <div className={BreedInfoCSS.topImageContainer}>
      <img className={BreedInfoCSS.topPicture} src={topImage} alt="Breed Information" />
      <div className={BreedInfoCSS.breedInfoTxt}>Breed Information and History</div>
    </div>
  );
};

export default BreedInfo;
