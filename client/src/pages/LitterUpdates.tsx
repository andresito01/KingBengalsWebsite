import React, { useState } from "react";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
import LitterUpdatesCSS from "./styles/LitterUpdates.module.css";
// import ModalStyle from "../components/styles/LitterModal.module.css";

import DisplayLitter from "../components/DisplayLitter";

const LitterUpdates: React.FC = () => {
  const fontSizeHeader = { fontSize: "50px" };
  const fontSizeParagraph = { fontSize: "20px" };

  return (
    <div className={LitterUpdatesCSS.litterUpdatesPage}>
      <WebNavHeader />
      <div className={LitterUpdatesCSS.litterInstructionContainer}>
        <h1 style={fontSizeHeader}>Check Out Our Litters!</h1>
        <p style={fontSizeParagraph}>
          Below you will find information about each kitten within a litter.
          <br />
          Each parent of a litter can be seen, for more information about the
          parents please checkout 'Our Cats' page.
          <br />
          Clicking either of the Info Boxes below will bring up information
          regarding the litter birth date and expected availability.
          <br />
          Also specific characteristics of each kitten will be provided along
          with a image so see their coat pattern/colors.
          <br />
          If you find a kitten you like, please see our 'Reserve a Kitten' page
          to place a request.
        </p>
      </div>

      {/* Containers for the two litters */}
      <div className={LitterUpdatesCSS.litterWrapper}>
        <DisplayLitter />
      </div>
      <Footer />
    </div>
  );
};

export default LitterUpdates;
