import React from "react";
import WebNavHeader from "../components/WebNavHeader";
import "./styles/BreedInfo.css";
import topImage from "../images/SpottedVsMarbled.png";
import spotted from "../images/SpottedBengals.png";
import marbled from "../images/MarbledBengals.png";

const BreedInfo = () => {
  return (
    <div className="breedInfoPage">
      <WebNavHeader />
      <BreedInfoTopPic />
      <div className="bottomContainer">
        <SpottedBengals />
        <MarbledBengals />
      </div>
    </div>
  );
};

const BreedInfoTopPic = () => {
  return (
    <div className="topImageContainer">
      <img className="topPicture" src={topImage} alt="Breed Information" />
      <div className="breedInfoTxt">Breed Information and History</div>
    </div>
  );
};
const SpottedBengals = () => {
  return (
    <img src={spotted} alt="Breed Information" style={{ float: "left" }} />
  );
};
const MarbledBengals = () => {
  return (
    <img src={marbled} alt="Breed Information" style={{ float: "right" }} />
  );
};

export default BreedInfo;
