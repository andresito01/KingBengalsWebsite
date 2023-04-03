import React from "react";
import BreedInfoCSS from "./styles/BreedInfo.module.css";
import topImage from "../images/SpottedVsMarbled_edited.png";
import spotted from "../images/SpottedBengals.png";
import marbled from "../images/MarbledBengals.png";
import redstar from "../images/1024px-Paintedcats_Red_Star_standing.jpg";
import WebNavHeader from "../components/WebNavHeader";
import bengalKitten from '../images/Bengal-Cats.jpg'
import { positional } from "yargs";

const BreedInfo = () => {
  return (
    <div className={BreedInfoCSS.breedInfoPage}>
      <WebNavHeader/>
      <div className={BreedInfoCSS.backgroundLayer}>
      
      <BreedHistory/>
        
      <PatternsSpotMarble/>

      <Personality/>

      <FunFacts/>

      <BengalCatHealth/>

      <OwnerCompatibility/>

      <SocialMedia/>

      </div>
    </div>
  )
}

/**************************************** Breed History *************************************************/

const BreedHistory = () => {

  return (
        <div className = {BreedInfoCSS.bengalsTextContainer}>
          <h2 className = {BreedInfoCSS.sectionHeader}>The Bengal Cat</h2>
          <img className = {BreedInfoCSS.bengalsIntroPic} src={redstar} 
            alt="Bengal cat by LightBurst" style={{float:"right",height:345}} />
          <p className={BreedInfoCSS.text}> 
            The Bengal breed of cats gets their name from the Asian leopard cat, 
            taxonomic name: <i>Prionailurus bengalensis</i>, from which they 
            are bred together with domestic cat breeds and usually again with 
            cat breeds that have a more friendly nature. Bengal cats are considered 
            domestic when they are at least the fourth generation away from their wild 
            grandparent. The Bengal breed was officially recognized by The International 
            Cat Association --TICA-- in 1986, and was granted championship status in 1991.
            <br/><br/>
            With their appearance of a miniature leopard, the initial goal was to 
            produce a cat breed to serve as an alternative to keeping wild cats as 
            pets. Bengals are strikingly known for being the only domestic cat 
            breed to feature "rosettes" --spotted markings-- though their fur can 
            sport an assortment of stripes and swirls.
            <br/><br/>
            The earliest mentions of a Asian leopard cat and domestic breed cross appeared 
            in the first cat pedigree book <i>Our Cats and All About Them</i>, written by 
            Harrison Weir in 1889. However, cat breeder and conservationalist Jean Mill is 
            credited with creating the modern Bengal cat breed. Mill created the her first 
            Asian leopard cat and black tomcat cross in 1963, making this F1 cross the 
            first documented mating of an Asian leopard cat with a domestic breed. She would 
            become venture in earnest with her breeding program in 1970, when she received a 
            gift of Bengal cats by Willard Centerwall.
            <br/><br/>
            In 1982, during her travels in India, Mill obtained two Egyptian Mau cats and bred 
            them with the Centerwall Bengal cats. Mill would succeed where other Bengal breeders 
            failed: she would retain the fertility of Bengal crossbreeds from the F1 through F4 
            generations and achieved a fertile F5 Bengal with a domestic cat temperament.
          </p>
        </div>
  )
}

/**************************************** Bengal Cat Personality and Caretaking *************************************************/

const Personality = () => {

  return (
        <div className={BreedInfoCSS.bengalsTextContainer}>
          <h2 className = {BreedInfoCSS.sectionHeader}>Personality and Caretaking</h2>
          <img className = {BreedInfoCSS.bengalsIntroPic} src = {bengalKitten} alt="Placeholder" style ={{float:"right", height:300}}/>
          <p className={BreedInfoCSS.text}>
            The Bengal is a medium-to-high maintenance cat, as they have are very 
            active, energetic, and very affectionate with their owner. Though not 
            typically lap cats, Bengals very much enjoy the company on their Breed, 
            and do best with another cat buddy to keep them company. 
            <br/><br/>
            Bengals remain athletic even into their senior years, and require a decent amount
            of space and forms of entertainment to keep content; plenty of second-story territory 
            in the form of catwalks, perches, and cat trees are great ways to satisfy a Bengal's 
            explorative spirit. Unlike most cat breeds, Bengals like the water, and could opt to 
            join their owner in the shower to play in the running water!
            <br/><br/>
            In terms of grooming and nutrition, the Bengal does not demand any particular 
            care. Routine coat brushing and monthly claw trimming, and ideally teeth-
            brushing, will be enough for most Bengals. 
          </p>
        </div>
  )
}


/**************************************** Patterns - Spotted & Marble *********************************************************/
const PatternsSpotMarble = () => {

  return (
    <div className={BreedInfoCSS.containerBox}>
      <div className={BreedInfoCSS.containerRowBox}>
      <h1 className={BreedInfoCSS.bold}> Bengal </h1>

      {/*<div className={BreedInfoCSS.imgCenter}> */}
      <div className={BreedInfoCSS.imgContainer}>
        <img className={BreedInfoCSS.topPicture} src={topImage} alt="Breed Information"/>
      </div>

      <h1 className={BreedInfoCSS.bold}> Patterns </h1>
    </div>

    <h2> Bengal cats are born with one of two patterns: spotted or marbled.
      <h1 className={BreedInfoCSS.sectionHeader}> Bengal Cat Patterns </h1>
      <h3> _______________</h3>
      <h2 className={BreedInfoCSS.bengalsTextContainer}> Bengal Cat are born with one of two patterns: Spotted or Marbled.
          <br/> Along with their personality, it's one of their defining features that make them unique.
          <br/> Althought, some may use the word 'exotic' to refer to their uniqueness.
          <br/> Below are pictures of each pattern with different combinations of colors they can be born with. </h2>
    <h3> _______________</h3>
      {/*<div className={BreedInfoCSS.imgCenter}>
          <div className={BreedInfoCSS.bottomContainer}>
          <img src = {spotted} style={{float:"left", width:500}} 
            alt="Spotted coats example"/>
          <img src = {marbled} style={{float:"right", width:500}} 
            alt="Marbled coats example"/>
        </div>
        <div className={BreedInfoCSS.topImageContainer}>
          <img className={BreedInfoCSS.topPicture} src={topImage} alt="Breed Information" width={100}/>
        </div>
      </div>*/}
{/*********************************************************************************************************************/}
    <div className={BreedInfoCSS.containerRowBox}>
      <div className={BreedInfoCSS.containerRow2}>
        <h1 className={BreedInfoCSS.bold}> Spotted </h1>
        {/*<div className={BreedInfoCSS.imgContainer}>*/}
         <img src = {spotted} style={{width:500}} 
            alt="Spotted coats example"/>  
      </div>

      <h2> <br/> <br/> VS. </h2>  

    <div className={BreedInfoCSS.containerRow2}>
      <h1 className={BreedInfoCSS.bold}> Marbled </h1>
      {/*<div className={BreedInfoCSS.imgContainer}>*/}
      <img src = {marbled} style={{width:500}} 
            alt="Marbled coats example"/>
    </div>
    
  </div>
</div>
);

}


/**************************************** Fun Facts about Bengal Cats *********************************************************/
const FunFacts = () => {
  return (
  <div className={BreedInfoCSS.containerRowBox}>
    <div className={BreedInfoCSS.containerRow1}>
      <h2 className={BreedInfoCSS.bold}> Goofy Bengal kitten pic </h2>
      <img alt="headerImage" src={require("../images/cute cat on back.jpg")} width = "700" height = "450"/>
    </div>
    <div className={BreedInfoCSS.containerRow2}>
      <h1 className={BreedInfoCSS.bold}> 10 Fun Facts about Bengal Cats </h1>
      <h3> _______________</h3>

    </div>
  </div>
  );
}
 

/**************************************** Bengal Cat Health *********************************************************/
const BengalCatHealth = () => {

  return (
    <div className={BreedInfoCSS.containerRowBox2}>
      <div className={BreedInfoCSS.containerRow1}>
        <h1 className={BreedInfoCSS.bold}> Bengal Cat Health </h1>
        <h3> _______________</h3>
        <h3> Heart disease <br/> 
             Eye disease<br/> 
             Joint problems <br/>
             kidney disease </h3>
        <img alt="headerImage" src={require("../images/Bengal-cat-health-problems-and-diseases.jpg")} width = "500" height = "auto" />
      </div>
    </div>
  );
}


/**************************************** Owner compatibility *********************************************************/
const OwnerCompatibility = () => {

  return (
  <div className={BreedInfoCSS.containerRowBox}>
    <div className={BreedInfoCSS.containerRow2}>
      <h1 className={BreedInfoCSS.bold}> Owner Compatibility </h1>
      <h3> _______________</h3>
    </div>
    <div className={BreedInfoCSS.containerRow1}>
      <h1 className={BreedInfoCSS.bold}> Pic of an active Cat </h1>
      <div className={BreedInfoCSS.imgContainer}>
      <img alt="headerImage" src={require("../images/bengalcatleash.jpg") } />{/*} width = "600" height = "300" />*/}
      </div>
    </div>
  </div>
  );
}


/**************************************** Social Media *********************************************************/
const SocialMedia = () => {

  return (
    <div className={BreedInfoCSS.containerBottom}>
      <div className={BreedInfoCSS.containerRow1}>
        <h3>________________________________</h3>
        <h1 className = {BreedInfoCSS.textLeftBold}> Follow Us On </h1> <br/>
        <div className = {BreedInfoCSS.imgInsta}>
        <img alt="headerImage" src={require("../images/transparent-social-media.png")} width = "85" height = "75" />
        </div>
      </div> 
    </div>
  )
}


export default BreedInfo;
