import React from "react";
import BreedInfoCSS from "./styles/BreedInfo.module.css";
import topImage from "../images/SpottedVsMarbled.png";
import spotted from "../images/SpottedBengals.png";
import marbled from "../images/MarbledBengals.png";
import redstar from "../images/1024px-Paintedcats_Red_Star_standing.jpg";
import WebNavHeader from "../components/WebNavHeader";

const BreedInfo = () => {
  return (
    <div className={BreedInfoCSS.breedInfoPage}>
      <WebNavHeader/>
      <div className={BreedInfoCSS.backgroundLayer}>
        <div className = {BreedInfoCSS.bengalsTextContainer}>
          <img className = {BreedInfoCSS.bengalsIntroPic} src={redstar} 
            alt="Bengal cat by LightBurst" />
          <h2 className = {BreedInfoCSS.sectionHeader}>The Bengal Cat</h2>
          <p className={BreedInfoCSS.text}> 
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
        <div className={BreedInfoCSS.bottomContainer}>
          <img src = {spotted} style={{float:"left", width:500 }} 
            alt="Spotted coats example"/>
          <img src = {marbled} style={{float:"right", width:500 }} 
            alt="Marbled coats example"/>
        </div>
        <div className={BreedInfoCSS.bengalsTextContainer}>
          <h2 className = {BreedInfoCSS.sectionHeader}>Personality and Caretaking</h2>
          <p className={BreedInfoCSS.text}>
          The Bengal is a medium-to-high maintenance cat, as they have are very 
            active, energetic, and very affectionate with their owner. Though not 
            typically lap cats, Bengals very much enjoy the company on their owners, 
            and do best with another cat buddy to keep them company. 
            <br/><br/>
            Bengals remain athletic even into their senior years, and require a decent amount
            of space and forms of entertainment to keep content; plenty of second-story territory 
            in the form of catwalks, perches, and cat trees are great ways to satisfy a Bengal's 
            explorative spirit. Unlike most cat breeds, Bengals like the water, and could opt to 
            join their owner in the shower to play in the running water!
            <br/><br/>
            In terms of grooming and nutrition, the Bengal does not demand any particular 
            care. Routine coat brushing and monthly claw trimming, and ideally teeth-
            brushing, will be enough for most Bengals. 
          </p>
        </div>
      </div>
    </div>
  );
};

const BreedInfoTopPic = () => {
  return (
    <div className={BreedInfoCSS.topImageContainer}>
      <img className={BreedInfoCSS.topPicture} src={topImage} alt="Breed Information" width={200}/>
    </div>
  );
};

export default BreedInfo;
