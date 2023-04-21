import React from "react";
import AboutCSS from "./styles/About.module.css";
import WebNavHeader from "../components/WebNavHeader";
import background from "../images/pattern.jpg";

const About = () => {
  const fontSizeHeader = { fontSize: "60px" };
  const fontSizeParagraph = { fontSize: "20px" };

  return (
    <div className={AboutCSS.aboutPage}>
      <WebNavHeader />
      <header className={AboutCSS.header} style={fontSizeHeader}>
        Learn More About Us!
      </header>

      {/*>>>>>>>>>>>>>>>>>>>>>>>>>> body text page <<<<<<<<<<<<<<<<<<<<<<<<<<<<*/}
      <div className={AboutCSS.aboutPageBody}>
        {/* top section */}
        <div className={AboutCSS.topSection}>
          <section className={AboutCSS.p1}>

            {/*<div className={AboutCSS.question1}>
              <h3>What is JavaScript</h3>
              <svg width="15" height="10" viewBox="0 0 42 25">
                <path d="M3 3l21 21L95 3" stroke="white" stroke-width="7" stroke-linecap="round"></path>
              </svg>
            </div>

            <div className={AboutCSS.answer1}>
              <p>
                This is just so see if it will work or not.
              </p>
            </div>
          */}
            <p style={fontSizeParagraph}>
              Location of the business <br></br>
              We are located in Sacramento, California just near the vibrant
              downtown. Brief description of the physical location, such as
              venue, view, landmarks nearby. <br></br>
              <br></br>
              History of the business <br></br>
              How long have we been in this business? <br></br>
              What are the bengal cats bred for? pets, companionship, house
              cats, competitions, family pets, etc.
            </p>
          </section>
          <section className={AboutCSS.box1}>
            <img alt="box1Image" src={require("../images/Placeholder.png")} />
          </section>
        </div>

        <p className={AboutCSS.p2} style={fontSizeParagraph}>
          What kind of approach does the business take with training and working
          with all the cats?
          <br></br> What does the business believe in when it comes to
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
      </div>
      {/* end body text */}
      {/* pictures */}
      <div className={AboutCSS.bottomPics}>
        <img id={AboutCSS.bottomImage1} alt="box2Image" src={require("../images/Litter1.png")} />
        <img id={AboutCSS.bottomImage2} alt="box3Image" src={require("../images/Litter2.png")} />
        {/* <div className={AboutCSS.box2}></div>
        <div className={AboutCSS.box3}></div> */}
      </div>
      {/*>>>>>>>>>>>>>>>>>> text */}
      <div>
        <p className={AboutCSS.p3} style={fontSizeParagraph}>
          <b>What will the business provide with every kitten?</b><br></br>
          Certificates, limited garantees? Supplies (limited), vaccinations,
          info packets? Limited amount of food, toys, training guide? etc.
          <br></br>
        </p>
      </div>
    </div>
  );
};

export default About;