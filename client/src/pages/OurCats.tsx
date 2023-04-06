import React, {useState} from 'react';
import WebNavHeader from '../components/WebNavHeader';
import Footer from "../components/Footer";
import OurCatsCSS from "./styles/OurCats.module.css";
import SliderStyle from "../components/styles/SliderInfo.module.css"
import SliderInfo from "../components/SliderInfo"

const OurCats: React.FC = () => {
  const [isSliderOpen1, setIsSliderOpen1] = useState(false);
  const [isSliderOpen2, setIsSliderOpen2] = useState(false);
  const [isSliderOpen3, setIsSliderOpen3] = useState(false);

  //Handle Slider open/close for firstFemale
  const handleSliderClick1 = () => {
    setIsSliderOpen1(!isSliderOpen1);
  }

  //Handle slider open/close for secondFemale
  const handleSliderClick2 = () => {
    setIsSliderOpen2(!isSliderOpen2);
  }

  //Handle slider open/close for male
  const handleSliderClick3 = () => {
    setIsSliderOpen3(!isSliderOpen3);
  }

  return (
    <div className={OurCatsCSS.ourCatsPage}>
      <WebNavHeader/>
      <div className={OurCatsCSS.headerContainerOurCats}>
      
        <h1>Meet The Parents!</h1>
        <h2>
          We believe in quality genetics and pay close attention to our breeding program to ensure 
          those quality results we strive for. We provide our cats with the best care and nutrition 
          possible. We give them lots of love and affection so they feel right at home.
          <br></br><br></br>
          Treatment and care is given to our cats to boost energy, behavior, and quality of life.
        </h2>
      </div>
      <div className={OurCatsCSS.secondaryHeaderContainer}>
        <h1>Click the photos below to see additional information</h1>
      </div>

      {/* Parent Container and Records */}
      <div className={OurCatsCSS.body}>
        {/* Organizations Column */}
        <div className={OurCatsCSS.organizations}>
          <p className={OurCatsCSS.organizationText}>
            The International Cat Association (TICA) is the world's largest genetic registry of pedigreed 
            and household cats. As an official cat registrar, TICA maintains accurate records of cat breeding 
            and pedigrees, provides cat shows and competitions, and offers a variety of educational resources 
            for cat enthusiasts.
            <br></br><br></br>
            It is important for cat breeders and owners to register their cats 
            with TICA to ensure the cat's pedigree and genetic history are accurately recorded, and to 
            participate in TICA events and competitions, which can help promote and improve the breed.
            <br></br><br></br>
            To learn more about TICA and what they do or what they stand for, click the logo here.
          </p>
          {/* Links to official organizations */}
          <a href="https://tica.org/index.php/resources/our-association/about-tica" target="_blank" rel='noreferrer'>
            <button className={OurCatsCSS.ticaBtn}>
              <img alt='ticaLogo' className={OurCatsCSS.ticaLogo} src={require("../images/ticalogo.jpg")}/>
            </button>
          </a>
        </div>

        {/* Parents Column */}
        <div className={OurCatsCSS.parents}>
          {/* First Female Parent */}
          <div className={OurCatsCSS.parentTile}>
            <h1>Cleopatra, The Queen</h1>
            <p>Female</p>
            <button className={SliderStyle.containerBtn} onClick={handleSliderClick1}>
              <img alt='parentImg1' className={SliderStyle.containerImg} src={require("../images/Placeholder.png")}/>
            </button>
          </div>
          {/* Second Female Parent */}
          <div className={OurCatsCSS.parentTile}>
            <h1>Tsarina, The Precious</h1>
            <p>Female</p>
            <button className={SliderStyle.containerBtn} onClick={handleSliderClick2}>
              <img alt='parentImg2' className={SliderStyle.containerImg} src={require("../images/Placeholder.png")}/>
            </button>
          </div>
          {/* Male Parent */}
          <div className={OurCatsCSS.parentTile}>
            <h1>Hercules, The King</h1>
            <p>Male</p>
            <button className={SliderStyle.containerBtn} onClick={handleSliderClick3}>
              <img alt='parentImg3' className={SliderStyle.containerImg} src={require("../images/Placeholder.png")}/>
            </button>
          </div>
        </div>

        {/* Slider Column */}
        <div className={OurCatsCSS.sliderColumn}>
          <div className={SliderStyle.slider}>
            <SliderInfo isOpen={isSliderOpen1} onClose={handleSliderClick1} id={1}/>
          </div>
          <div className={SliderStyle.slider}>
            <SliderInfo isOpen={isSliderOpen2} onClose={handleSliderClick2} id={2}/>
          </div>
          <div className={SliderStyle.slider}>
            <SliderInfo isOpen={isSliderOpen3} onClose={handleSliderClick3} id={3}/>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default OurCats;