import React from "react";
import HomeCSS from "./styles/Home.module.css";
import WebNavHeader from "../components/WebNavHeader";
import BusinessCertificate from "../components/BusinessCertificate";
import Testimonials from "../components/Testimonials";

//>>>>>>>>>>>>>>>>>>>> Home Page <<<<<<<<<<<<<<<<<<<<<<<<<<<
const Home = () => {
  return (
    <div className={HomeCSS.homePageContainer}>
      {/*>>>>>>>>>>>>> Navigation Header <<<<<<<<<<<<*/}
      <WebNavHeader />

      {/*>>>>>>>>>>>> Homepage Header Image <<<<<<<<<<<<*/}
      <HomepageHeader />

      <MissionStatement />

      {/*>>>>>>>>>>>> Owners Picture and her Cat <<<<<<<<<<<<*/}
      <OwnerPicture />

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
      <img alt="headerImage" src={require("../images/HomepageHeader.png")} />

      {/* Header Question */}
      <div className={HomeCSS.homeHeaderQuestion}>
        <h1> Tiny leopard? A cat? or both?</h1>
      </div>
    </div>
  );
};

/* >>>>>>>>>>>>>>>>>>>>>>       Homepage Header     <<<<<<<<<<<<<<<<<<<<<<<<<<< */
const MissionStatement = () => {
  return (
    <div className={HomeCSS.missionStatement}>
      <div className={HomeCSS.missionStatementText}>
        <h3>Mission Statement Here</h3>
        <hr></hr>
        <p>
          “A quote or a paraphrase about Bengal cats that describes them well
          (personality, uniqueness, drive, other traits, etc)”.- Lidiya
          Zapuskalov, owner of KingBengals Cattery
        </p>
      </div>
    </div>
  );
};

/* >>>>>>>>>>>>>>>>>>>>   Owner's Picture and her Cat    <<<<<<<<<<<<<<<<<<<<<<<<<<< */
const OwnerPicture = () => {
  return (
    <div className={HomeCSS.ownerPicture}>
      <img alt="headerImage" src={require("../images/HomepageHeader.png")} />
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
      <img alt="headerImage" src={require("../images/Litter1.png")} />
      <img alt="headerImage" src={require("../images/Litter2.png")} />
    </div>
  );
};
export default Home;
