import React from "react";
import "./styles/Home.css";
import WebNavHeader from "../components/WebNavHeader";
import BusinessCertificate from "../components/BusinessCertificate";
//import ImageCarousel from "../components/ImageCarousel";
const Home = () => {
  return (
    <div className="homePage">
      <WebNavHeader />
      <img className='homeHeaderImg' alt='headerImage' src={require("../images/HomepageHeader.png")} />
      <div className="missionStatementContainer">
        <h3>Mission Statement Here</h3>
        <p>
          “A quote or a paraphrase about Bengal cats that describes them well (personality, uniqueness, drive, other traits, etc)”.- Lidiya Zapuskalov, owner of KingBengals Cattery
        </p>
      </div>
      <div>
        <BusinessCertificate />
      </div>
        
    </div>
  );
};

export default Home;
