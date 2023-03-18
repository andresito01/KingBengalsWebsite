import React from "react";
import HomeCSS from "./styles/Home.module.css";
import BusinessCertificate from "../components/BusinessCertificate";
import Testimonials from "../components/Testimonials";
import ImageCarousel from "../components/ImageCarousel";
import WebNavHeader from "../components/WebNavHeader";
import homePageJSON from "../json/homePage.json";


const fontSizeMissionStatement = {fontSize: '2rem'};
const fontSizeQuote = {fontSize: '1rem'};

//>>>>>>>>>>>>>>>>>>>> Home Page <<<<<<<<<<<<<<<<<<<<<<<<<<<
const Home = () => {
  return (
    <div className={HomeCSS.homePageContainer}>
      <WebNavHeader/>
  
      {/*>>>>>>>>>>>> Homepage Header Image <<<<<<<<<<<<*/}
      <HomepageHeader />

      <MissionStatement />

      {/*>>>>>>>>>>>> Owners Picture and her Cat <<<<<<<<<<<<*/}
      <OwnerPicture />

       {/*>>>>>>>>>>>> Scrollable Picture Component <<<<<<<<<<<<*/}
       <ImageCarousel />

      {/*>>>>>>>>>>>> Past Litters <<<<<<<<<<<<*/}
      <PastLittersTitle />
      <PastLitters />

      {/*>>>>>>>>>>>> Business Certificate <<<<<<<<<<<<*/}
      <BusinessCertificate />

      {/*>>>>>>>>>>>>   Testimonials   <<<<<<<<<<<<<<<<*/}
      <Testimonials />
    </div>
  );
};

/* >>>>>>>>>>>>>>>>>>>>>>       Homepage Header     <<<<<<<<<<<<<<<<<<<<<<<<<<< */
const HomepageHeader = () => {
  return (
    <div className={HomeCSS.homeHeader}>
      {/* Header Image */}
      <img alt="headerImage" src={homePageJSON.headerImg} />
    </div>
  );
};

/* >>>>>>>>>>>>>>>>>>>>>>       Homepage Header     <<<<<<<<<<<<<<<<<<<<<<<<<<< */
const MissionStatement = () => {
  return (
    <div className={HomeCSS.missionStatement}>
      <div className={HomeCSS.missionStatementText}>
        <h3 style={fontSizeMissionStatement}>KingBengals' Mission Statement</h3>
        <hr></hr>
        <p style={fontSizeQuote}>{homePageJSON.missionStatement}</p>
      </div>
    </div>
  );
};

/* >>>>>>>>>>>>>>>>>>>>   Owner's Picture and her Cat    <<<<<<<<<<<<<<<<<<<<<<<<<<< */
const OwnerPicture = () => {
  return (
    <div className={HomeCSS.ownerPicture}>
      <img alt="headerImage" src={homePageJSON.ownerImg} />
    </div>
  );
};

/* >>>>>>>>>>>>>>>>>>>>>>    Past Litter's Title   <<<<<<<<<<<<<<<<<<*/
const PastLittersTitle = () => {
  return (
    <div className={HomeCSS.pastLittersTitle}>
      <h2>Past Litters</h2>
    </div>
  );
};

/* >>>>>>>>>>>>>>>>>>>>  Past Litters    <<<<<<<<<<<<<<<<<<<<<<<<<<< */
const PastLitters = () => {
  return (
    <div className={HomeCSS.pastLitters}>
      {homePageJSON.pastLitterImgs.map((litterImg, index) => {
        return (
          <div key={index}>
             <img className="litterImg" alt="litterImg" src={litterImg.image} />
          </div>
        )
      })}
    </div>
  );
};
export default Home;
