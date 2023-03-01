import React from "react";
import BreedInfoCSS from "./styles/BreedInfo.module.css";
import topImage from "../images/SpottedVsMarbled.png";
import spotted from "../images/SpottedBengals.png";
import marbled from "../images/MarbledBengals.png";
import redstar from "../images/1024px-Paintedcats_Red_Star_standing.jpg";
import WebNavHeader from "../components/WebNavHeader";

const BreedInfo = () => {
  return (
    <div className="breedInfoPage">
      <WebNavHeader/>
      <div className='backgroundLayer'>
        <div className = "bengalsTextContainer">
          <img className = "bengalsIntroPic" src={redstar} 
            alt="Bengal cat by LightBurst" />
          <h2 className = "sectionHeader">The Bengal Cat</h2>
          <p className="text">
            The Bengal breed of cats gets their name from the Asian leopard cat, 
            taxonomic name: <i>Prionailurus bengalensis</i>, from which they 
            are bred together with domestic cat breeds and usually again with 
            cat breeds that have a more friendly nature. Bengal cats are considered 
            domestic when they are at least the fourth generation away from their wild 
            grandparent. The Bengal breed was officially recognized by The International 
            Cat Association --TICA-- in 1986.<br/><br/>
            With their appearance of a miniature leopard, the initial goal was to 
            produce a cat breed to serve as an alternative to keeping wild cats as 
            pets. Bengals are strikingly known for being the only domestic cat 
            breed to feature "rosettes" --spotted markings-- though their fur can 
            sport an assortment of stripes and swirls.
          </p>
        </div>
      
        <BreedInfoTopPic />
        <div className="bottomContainer">
          <img src = {spotted} style={{float:"left", width:500 }} 
            alt="Spotted coats example"/>
          <img src = {marbled} style={{float:"right", width:500 }} 
            alt="Marbled coats example"/>
        </div>
        <div className="bengalsTextContainer">
          <h2 className = "sectionHeader">Personality and Caretaking</h2>
          <p className="text">
            The Bengal is a medium-to-high maintenance cat, as they have are very 
            active, energetic, and jealous for attention. Bengals do not do well when left
            alone for long periods of time. They require a decent amount of space as well 
            as forms of entertainment to keep content.
            <br/><br/>
            In terms of grooming and nutrition, the Bengal does not demand any particular 
            care. Routine coat brushing and monthly claw trimming, and ideally teeth-
            brushing will be well for most Bengals.
          </p>
        </div>
      </div>
    </div>
  );
};

const BreedInfoTopPic = () => {
  return (
    <div className="topImageContainer">
      <img className="topPicture" src={topImage} alt="Breed Information" width={200}/>
    </div>
  );
};

export default BreedInfo;
