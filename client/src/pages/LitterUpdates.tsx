import React, { useState } from "react";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
import LitterUpdatesCSS from "./styles/LitterUpdates.module.css";
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
          Clicking either of the Litter containers below will bring up
          information regarding the posted litter, such as their birth date,
          availability, and price.
          <br />
          Each kitten's specific characteristics will be provided once they are
          atlest a week old along with an image regerding their coat
          pattern/colors, etc.
          <br />
          If you see a kitten you like, please see our 'Reserve a Kitten' page
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
