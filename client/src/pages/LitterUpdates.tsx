import React from 'react';
import WebNavHeader from '../components/WebNavHeader';
import LitterUpdatesCSS from "./styles/LitterUpdates.module.css"

const LitterUpdates = () => {
  const fontSizeHeader = {fontSize: "50px"};
  const fontSizeParagraph = {fontSize: "25px"};

  return (
    <div className={LitterUpdatesCSS.litterUpdatesPage}>
      <WebNavHeader />
      <div className={LitterUpdatesCSS.litterInstructionContainer}>
        <h1 style={fontSizeHeader}>Check Out Our Litters!</h1>
        <p style={fontSizeParagraph}>Below you will find the information for the litter that are currently available for picking.<br/>Litter planning & info regarding cat pregnancy<br/>Explaining the litter characteristics: range of kittens in each litter<br/>Expected delivery dates will be provided<br/>lease read how to 'Reserve a Kitten' page thoroughly!<b/>Puppy photos and videos will be updated bi-weekly.</p>
      </div>
      <div className={LitterUpdatesCSS.parentName1}>Mom Name and Dad Name</div>
      <div className={LitterUpdatesCSS.parentName2}>Mom Name and Dad Name</div>
      <div className={LitterUpdatesCSS.litterCardWrapper}>
        <div className={LitterUpdatesCSS.litterCard}>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent1Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent2Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
        </div>
        <div className={LitterUpdatesCSS.litterCard}>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent1Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
          <div className={LitterUpdatesCSS.parent}>
            <img className={LitterUpdatesCSS.parent2Image} alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LitterUpdates;