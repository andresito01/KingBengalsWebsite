import React from "react";
import AboutCSS from "./styles/About.module.css";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
import Data from "../json/aboutUs.json";

const About = () => {
  const fontSizeHeader = { fontSize: "60px" };
  const fontSizeParagraph = { fontSize: "20px" };

  return (
    <div className={AboutCSS.aboutPage}>
      <WebNavHeader />
      <header className={AboutCSS.header} style={fontSizeHeader}>
        Learn More About Us!
      </header>
      <div className={AboutCSS.aboutPageBody}>
        {/*>>>>>>>>>>>>>>   Business Location & History   <<<<<<<<<<<<<*/}
        <p className={AboutCSS.p1}>
          Location of the business <br></br>
          We are located in Sacramento, California just near the vibrant
          downtown. Brief description of the physical location, such as venue,
          view, landmarks nearby. <br></br>
          <br></br>
          History of the business <br></br>
          How long have we been in this business? <br></br>
          What are the bengal cats bred for? pets, companionship, house cats,
          competitions, family pets, etc.
        </p>
        {/* >>>>>>>>>>>>>> Top-right image on the About-Page <<<<<<<<<<*/}
        <div className={AboutCSS.topRightImg}>
          <img alt="aboutUs" src={Data.images.topRightImg} />
        </div>
        {/* >>>>>>>>>>>>>>    More about the business   <<<<<<<<<<<<<< */}
        <p className={AboutCSS.p2}>
          What kind of approach does the business take with training and working
          with all the cats? What does the business believe in when it comes to
          the treatment of all their cats? <br></br>
          <br></br>
          What kind of cats does the business produce? <br></br>
          Health/color/patterns/tempermant/energy levels etc. <br></br>
          <br></br>
          Behavior of the Bengal cats specifically<br></br>
          What do they require in order to step up for success?<br></br>
          <br></br>
          Personallity of the kittens<br></br>
          Is it predictable? What factors can be focused on?<br></br>
          <br></br>
          Advice for the customers.<br></br>
          <br></br>
          Updates the business provides on a weekly/biweekly basis.<br></br>
          What can customers look forward to between the time they've picked a
          kitten and til the kitten is 2 months old.<br></br>
          Ex. Pictures, videos of their kitten will be uploaded every week or
          two weeks until the kitten is months of age and ready to go to their
          new home with the owner.<br></br>
        </p>
        {/* >>>>>>>>> Bottom Images on About-Page <<<<<<<<<<<<<<< */}
        <div className={AboutCSS.bottomLeftImg}>
          <img alt="litter1" src={Data.images.bottomLeftImg} />
        </div>
        <div className={AboutCSS.bottomRightImg}>
          <img alt="litter2" src={Data.images.bottomRightImg} />
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
