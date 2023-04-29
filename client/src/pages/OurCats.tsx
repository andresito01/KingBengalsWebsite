import React, { useState, useEffect } from "react";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";
import OurCatsCSS from "./styles/OurCats.module.css";
import SliderStyle from "../components/styles/SliderInfo.module.css";
import SliderInfo from "../components/SliderInfo";
import { db } from "../admin/config/firebase";
import { onSnapshot, query, collection } from "firebase/firestore";

const OurCats: React.FC = () => {
  return (
    <div className={OurCatsCSS.ourCatsPage}>
      <WebNavHeader />
      <div className={OurCatsCSS.headerBackground}>
        <div className={OurCatsCSS.headerContainerOurCats}>
          <h1>Meet Our Cats!</h1>
          <h2>
            We believe in quality genetics and pay close attention to our
            breeding program to ensure those quality results we strive for. We
            provide our cats with the best care and nutrition possible. We give
            them lots of love and affection so they feel right at home.
            <br></br>
            <br></br>
            Treatment and care is given to our cats to boost energy, behavior,
            and quality of life.
          </h2>
          <h3>
            <br></br>
            <br></br>
            <br></br>
            Click the photos below to see additional information
          </h3>
        </div>
      </div>

      {/* Parent Container and Records */}
      <div className={OurCatsCSS.body}>
        {/* Organizations Column */}
        <div className={OurCatsCSS.organizations}>
          <p className={OurCatsCSS.organizationText}>
            The International Cat Association (TICA) is the world's largest
            genetic registry of pedigreed and household cats. As an official cat
            registrar, TICA maintains accurate records of cat breeding and
            pedigrees, provides cat shows and competitions, and offers a variety
            of educational resources for cat enthusiasts.
            <br></br>
            <br></br>
            It is important for cat breeders and owners to register their cats
            with TICA to ensure the cat's pedigree and genetic history are
            accurately recorded, and to participate in TICA events and
            competitions, which can help promote and improve the breed.
            <br></br>
            <br></br>
            To learn more about TICA and what they do or what they stand for,
            click the logo here.
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

        {/* Parent and Slider Column */}
        <div className={OurCatsCSS.parentColumn}>
          <Parent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    Parents     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const Parent = () => {
  /******* Parent structure ***********/
  interface parentFormat {
    id: string;
    name: string;
    sex: string;
    attitude: string;
    picture: string;
    status: string;
    pattern: string;
    lineage: string;
    history: string;
  }

  /*******************  useState constants  ************************/
  const [parentList, setParentList] = useState([] as parentFormat[]);
  const [wasChanged, setWasChanged] = useState(true);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  /*******************  Get Parents from db  ************************/
  useEffect(() => {
    try {
      if (wasChanged) {
        onSnapshot(query(collection(db, "parents")), (snapshot) => {
          const data: Array<any> = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setParentList(data);
          setWasChanged(false);
          console.log("Parent were loaded from db");
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

  /*******************  handle slider click  ************************/
  const handleSliderClick = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <article>
      {parentList.map((parent) => {
        const { id, name, sex, picture, status, pattern, lineage, history } =
          parent;
        return (
          <div className={OurCatsCSS.parentTileAndSlider} key={id}>
            <div className={OurCatsCSS.parentTile}>
              <h1>{name}</h1>
              <p>{sex}</p>
              <button
                className={SliderStyle.containerBtn}
                onClick={handleSliderClick}
              >
                <img
                  alt={name}
                  className={SliderStyle.containerImg}
                  src={picture}
                />
              </button>
            </div>
            <div className={SliderStyle.slider}>
              <SliderInfo
                isOpen={isSliderOpen}
                onClose={handleSliderClick}
                parent={parent}
              />
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default OurCats;
