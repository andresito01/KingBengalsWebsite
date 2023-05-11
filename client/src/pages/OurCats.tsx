import React from "react";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
import OurCatsCSS from "./styles/OurCats.module.css";
import DisplayParents from "../components/DisplayParents";
// import NavBarUnderLayer from "../components/NavBarUnderLayer";

const OurCats: React.FC = () => {
  return (
    <div className={OurCatsCSS.ourCatsPage}>
      <WebNavHeader />
      <div className={OurCatsCSS.headerBackground}>
        <div className={OurCatsCSS.headerContainerOurCats}>
          <h1>Meet Our Cats!</h1>
          <h3>
            We believe in quality genetics and pay close attention to our
            breeding program to ensure those quality results we strive for. We
            provide our cats with the best care and nutrition possible. We give
            them lots of love and affection so they feel right at home.
            <br></br>
            <br></br>
            Best treatment and care is given to our cats to boost their energy,
            behavior, and quality of life.
          </h3>
          <h3>
            <br></br>
            <br></br>
            <br></br>
            Click the photos below to see additional information for each of out
            cats!
          </h3>
        </div>
      </div>

      {/* Parent Container and Records */}
      <div className={OurCatsCSS.body}>
        {/* Parent and Slider Column */}
        <div className={OurCatsCSS.parentColumn}>
          <DisplayParents />
        </div>

        {/* Organizations Column */}
        <div className={OurCatsCSS.organizations}>
          <p className={OurCatsCSS.organizationText}>
            All of our cats are registered with The International Cat
            Association (TICA). It is the world's largest genetic registry of
            pedigreed and household cats. As an official cat registrar, TICA
            maintains accurate records of cat breeding and pedigrees, provides
            cat shows and competitions, and offers a variety of educational
            resources for cat enthusiasts.
            <br></br>
            <br></br>
            It is important for cat breeders and owners to register their cats
            with TICA to ensure the cat's pedigree and genetic history are
            accurately recorded, and to participate in TICA events and
            competitions, which can help promote and improve the breed.
            <br></br>
            <br></br>
            To learn more about TICA and their mission, please click the logo on
            the right.
          </p>
          {/* Links to official organizations */}
          <a
            href="https://tica.org/index.php/resources/our-association/about-tica"
            target="_blank"
            rel="noreferrer"
          >
            <button className={OurCatsCSS.ticaBtn}>
              <img
                alt="ticaLogo"
                className={OurCatsCSS.ticaLogo}
                src={require("../images/ticalogo.jpg")}
              />
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurCats;
