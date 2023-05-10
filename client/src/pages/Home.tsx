import React from "react";
import HomeCSS from "./styles/Home.module.css";
import BusinessCertificate from "../components/BusinessCertificate";
import Testimonials from "../components/Testimonials";
import ImageCarousel from "../components/ImageCarousel";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
import homePageJSON from "../json/homePage.json";
import NavBarUnderLayer from "../components/NavBarUnderLayer";

const fontSizeMissionStatement = { fontSize: "26px" };
const fontSizeQuote = { fontSize: "20px" };

//>>>>>>>>>>>>>>>>>>>> Home Page <<<<<<<<<<<<<<<<<<<<<<<<<<<
const Home = () => {
  return (
    <div className={HomeCSS.homePageContainer}>
      <WebNavHeader />

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

      {/*>>>>>>>>>>>>   Footer   <<<<<<<<<<<<<<<<*/}
      <Footer />
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
        <h3 style={fontSizeMissionStatement}>
          {homePageJSON.missionStatement}
        </h3>
        <hr></hr>
        <p style={fontSizeQuote}>
          {homePageJSON.missionStatementDiscription}
          <div className={HomeCSS.missionOwnersName}>
            <h6> - Lydia Zapuskalov, owner of KingBengals Cattery </h6>
          </div>
        </p>
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
      <p>Past Litters</p>
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
        );
      })}
    </div>
  );
};
export default Home;
