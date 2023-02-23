import React from 'react';
import WebNavHeader from '../components/WebNavHeader';
import AboutCSS from "./styles/About.module.css";
import background from "../images/pattern.jpg";

const About = () => {
  const fontSizeHeader = {fontSize: "60px"}
  const fontSizeParagraph = {fontSize: "20px"}

  return (
    <div className='aboutPage' style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <WebNavHeader />
      <header style={fontSizeHeader}>KingBengals Cattery</header>
      <div className={AboutCSS.aboutPageBody}>
        <p id={AboutCSS.p1} style={fontSizeParagraph}>
          Location of the business <br></br>
          We are located in Sacramento, California just near the vibrant downtown.
          Brief description of the physical location, such as venue, view, landmarks nearby. <br></br>
          <br></br>
          History of the business <br></br>
          How long have we been in this business? <br></br>
          What are the bengal cats bred for? pets, companionship, house cats, competitions, family pets, etc.
        </p>
        <p id={AboutCSS.box1}></p>
        <p id={AboutCSS.p2} style={fontSizeParagraph}>
          What kind of approach does the business take with training and working with all the cats? What does 
          the business believe in when it comes to the treatment of all their cats? <br></br>
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
          What can customers look forward to between the time they've picked a kitten and til the kitten is 2 
          months old.<br></br>
          Ex. Pictures, videos of their kitten will be uploaded every week or two weeks until the kitten is 
          months of age and ready to go to their new home with the owner.<br></br>
        </p>
        <p id={AboutCSS.box2}></p>
        <p id={AboutCSS.box3}></p>
        <p id={AboutCSS.p3} style={fontSizeParagraph}>
          What will the business provide with every kitten?<br></br>
          Certificates, limited garantees? Supplies (limited), vaccinations, info packets? Limited amount of food, 
          toys, training guide? etc.<br></br>
        </p>
      </div>
    </div>
  )
}

export default About;