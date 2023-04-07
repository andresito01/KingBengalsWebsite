import React from "react";
import AboutCSS from "./styles/About.module.css";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
import Data from "../json/aboutUs.json";
import AboutJSON from "../json/aboutUs.json"

const About = () => {
  const fontSizeHeader = { fontSize: "60px" };
  const fontSizeParagraph = { fontSize: "20px" };

  return (
    <div className={AboutCSS.aboutPage}>
      <WebNavHeader /><br/>
      <header className={AboutCSS.header} style={fontSizeHeader}>
        Learn More About Us!
      </header><br/><br/>
      <div className={AboutCSS.aboutPageBody}>
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
        <div className={AboutCSS.topRightImg}>
          <img alt="aboutUs" src={Data.images.topRightImg} />
        </div>
        {/* >>>>>>>>>>>>>>    More about the business   <<<<<<<<<<<<<< */}
        <p className={AboutCSS.p2}>
          <h4>{AboutJSON.approachq}</h4>
          {AboutJSON.approacha}<br/><br/>
         
          <h4>{AboutJSON.inventoryq}</h4>
          {AboutJSON.inventorya}<br/><br/>
          
          {AboutJSON.otherinfo}<br/><br/>

          <h4>{AboutJSON.updatesq}</h4>
          {AboutJSON.updatesa}<br/><br/>
        </p>
        {/* >>>>>>>>> Bottom Images on About-Page <<<<<<<<<<<<<<< */}
        <div className = {AboutCSS.containerRow}>
          {/*<div className={AboutCSS.bottomLeftImg}>*/}
          <div className = {AboutCSS.imgContainer}>
            <img alt="litter1" src={Data.images.bottomLeftImg} />
          </div>
          {/*<div className={AboutCSS.bottomRightImg}>*/}
          <div className = {AboutCSS.imgContainer}>
            <img alt="litter2" src={Data.images.bottomRightImg} /> 
          </div>
        </div>
        {/* >>>>>>>> What does the business provides <<<<<<<<<<<< */}
        <p className={AboutCSS.p3}>
          What will the business provide with every kitten?<br></br>
          Certificates, limited garantees? Supplies (limited), vaccinations,
          info packets? Limited amount of food, toys, training guide? etc.
          <br></br>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
