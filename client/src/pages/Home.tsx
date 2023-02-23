import React from "react";
import HomeCSS from "./styles/Home.module.css";
import WebNavHeader from "../components/WebNavHeader";
import BusinessCertificate from "../components/BusinessCertificate";
import Testimonials from "../components/Testimonials";

//>>>>>>>>>>>>>>>>>>>> Home Page <<<<<<<<<<<<<<<<<<<<<<<<<<<
const Home = () => {
  return (
    <div className={HomeCSS.homePage}>
      {/*>>>>>>>>>>>>> Navigation Header <<<<<<<<<<<<*/}
      <WebNavHeader />

      {/*>>>>>>>>>>>> Home's top Image <<<<<<<<<<<<*/}
      <img
        className={HomeCSS.homeHeaderImg}
        alt="headerImage"
        src={require("../images/HomepageHeader.png")}
      />

      {/*>>>>>>>>>>>> Home's Top Statement <<<<<<<<<<<<*/}
      <div className={HomeCSS.missionStatementContainer}>
        <h3>Mission Statement Here</h3>
        <p>
          “A quote or a paraphrase about Bengal cats that describes them well
          (personality, uniqueness, drive, other traits, etc)”.- Lidiya
          Zapuskalov, owner of KingBengals Cattery
        </p>
      </div>

      {/*>>>>>>>>>>>> Business Certificate <<<<<<<<<<<<*/}
      <BusinessCertificate />

      {/*>>>>>>>>>>>>   Testimonials   <<<<<<<<<<<<<<<<*/}
      <Testimonials />
    </div>
  );
};

export default Home;
