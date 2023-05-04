import React from "react";
import AboutCSS from "./styles/About.module.css";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
import Data from "../json/aboutUs.json";
import AboutJSON from "../json/aboutUs.json"
import NavBarUnderLayer from "../components/NavBarUnderLayer";

const About = () => {
  const fontSizeHeader = { fontSize: "60px" };
  const fontSizeParagraph = { fontSize: "20px" };

  return (
    <div className={AboutCSS.aboutPage}>
      <NavBarUnderLayer/>
      <WebNavHeader /><br/>
      <header className={AboutCSS.header} style={fontSizeHeader}>
        Learn More About Us!
      </header><br/><br/>
      <div className={AboutCSS.aboutPageBody}>
        <div className = {AboutCSS.containerRow}>
          {/*>>>>>>>>>>>>>>   Business Location & History   <<<<<<<<<<<<<*/}
          <p className={AboutCSS.p1}>
            <h4>{AboutJSON.locationq}</h4>
            {AboutJSON.locationa}<br></br>
            <br></br>
            
            <h4>{AboutJSON.businessq}</h4>
            {AboutJSON.businessa} <br/><br/>
            
            <h4>{AboutJSON.bengalpurposeq}</h4>
            {AboutJSON.bengalpurposea}<br/><br/>
          </p>
          {/* >>>>>>>>>>>>>> Top-right image on the About-Page <<<<<<<<<<*/}
          <div className={AboutCSS.borderTop}>
            {/*<div className={AboutCSS.topRightImg}>*/}
              <img alt="aboutUs" src={Data.images.topRightImg} />
            {/*</div>*/}
          </div>
        </div>

        {/* >>>>>>>>>>>>>>    More about the business   <<<<<<<<<<<<<< */}
        <div className = {AboutCSS.containerRow}>
          <div className={AboutCSS.borderTop}>
            <img alt="aboutUs" src={Data.images.middleImg} />
          </div>
          <p className={AboutCSS.p2}>
            <h4>{AboutJSON.approachq}</h4>
            {AboutJSON.approacha}<br/><br/>
          
            <h4>{AboutJSON.inventoryq}</h4>
            {AboutJSON.inventorya}<br/><br/>
            
            {AboutJSON.otherinfo}<br/><br/>

            <h4>{AboutJSON.updatesq}</h4>
            {AboutJSON.updatesa}<br/><br/>
          </p>
        </div>
        {/* >>>>>>>>> Bottom Images on About-Page <<<<<<<<<<<<<<< */}
        <div className = {AboutCSS.containerRow2}>
          {/*<div className={AboutCSS.bottomLeftImg}>*/}
          
          <div className = {AboutCSS.border}>
            <img alt="leftCat" src={Data.images.bottomLeftImg} />
          </div>
          {/*<div className={AboutCSS.bottomRightImg}>*/}
          {/*<h1> Our </h1>*/}
          <div className = {AboutCSS.border}>
            <img alt="middleCat" src={Data.images.bottomMiddleImg} /> 
          </div>
          {/*<h1> Cats </h1>*/}
          <div className = {AboutCSS.border}>
            <img alt="rightCat" src={Data.images.bottomRightImg} /> 
          </div>
        </div>
        {/* >>>>>>>> What does the business provides <<<<<<<<<<<< */}
        <div className={AboutCSS.p3}>
          <div className = {AboutCSS.bold} >
            <p> We will provide some documents with every kitten.
            Such as registration, health, and vaccination records. We take pride in giving every 
            customer a healthy and joyful kitten. There might be some other supplies
            included as well, such as informational packets, limited amount of food, toys, training guide etc.
            </p>
          </div>
         </div>
      
      </div>
      <Footer />
    </div>
  );
};

export default About;
