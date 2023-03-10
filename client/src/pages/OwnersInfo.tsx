//import React, {useState} from 'react';
import React from 'react';
import OwnersInfoCSS from "./styles/OwnersInfo.module.css";
import WebNavHeader from "../components/WebNavHeader";

/******************************* Owner's Info ***************************** Note: A link for pro-recomm*/

const OwnersInfo = () => {
  return (
    <div className = {OwnersInfoCSS.backgroundLayer}>

      <WebNavHeader/>

      <OwnersInfoPageHeader/>

      <ProductsRecommend/>

      <KittenDevelopment/>

      <PrepareForKitten/>

      <VetInfo/>

      <KittenTraining/>

      <PetInsurance/>

    </div>
  )
}

/**************************************** Owner's Info Header section *********************************************************/
const OwnersInfoPageHeader = () => {

  return (
    <div className={OwnersInfoCSS.headerOwnersInfoImg}>
      <img alt="headerImage" src={require("../images/bencat - OwnersInfo header image.jpg")} />
      {/*<div className={OwnersInfoCSS.fixedOwnInfoHeaderImg}> 
      </div>*/}
        
      <div className={OwnersInfoCSS.headerOwnersInfo}>
        <h1> Owner's Info </h1>
        {/*<h1> Info </h1>*/}
      </div>
    </div>
  )
}

/**************************************** Products we Recommend *********************************************************/
const ProductsRecommend = () => {

  return (
    <div className={OwnersInfoCSS.containerBox}> {/*ProductsRecom}>*/}
      <h1 className={OwnersInfoCSS.bold}> Products We Recommend </h1>
      <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
      <h3> Below is a list of/link to products we recommend for your kitten. <br/> Toys and Treats <br/>Catteries? and crates <br/> Bedding and grooming products<br/> Training accessories? </h3>
      {/*<h3> From toys, treats, catteries?, bedding, and training accessories? </h3> */}
      <h2> A Link or List </h2>
    </div>
  );

}

/**************************************** Kitten Development Stages *********************************************************/
const KittenDevelopment = () => {
  return (
    <div className={OwnersInfoCSS.containerBox}>
      <h1 className={OwnersInfoCSS.bold}> Kitten Development Stages </h1>
      <h3>___________________________________________________________________________________________________________________</h3>
      <div className={OwnersInfoCSS.containerRowBox}>
        <div className={OwnersInfoCSS.containerRow2}>
         <h1 className={OwnersInfoCSS.bold}> Age: 1 - 2 weeks </h1>
         <h3> ___________________________________</h3>
         <div className={OwnersInfoCSS.imgKittenDev}>
          <img alt="headerImage" src={require("../images/cute bengal kitten.jpg")} width = "350" height = "400"/>
         </div>
         <h3> Text </h3>
        </div>
        <div className={OwnersInfoCSS.containerRow2}>
          <h1 className={OwnersInfoCSS.bold}> Age: 2 - 4 weeks </h1>
          <h3> ___________________________________</h3>
          <div className={OwnersInfoCSS.imgKittenDev}>
            <img alt="headerImage" src={require("../images/cute bengal kitten.jpg")} width = "350" height = "400"/>
          </div>
          <h3> Text </h3>
        </div>
        <div className={OwnersInfoCSS.containerRow2}>
          <h1 className={OwnersInfoCSS.bold}> Age: 2 Months </h1>
          <h3> ___________________________________</h3>
          <div className={OwnersInfoCSS.imgKittenDev}>
            <img alt="headerImage" src={require("../images/cute bengal kitten.jpg")} width = "350" height = "400"/>
          </div>
          <h3> Text </h3>
        </div>
      </div>
      {/*<div className={OwnersInfoCSS.imgKittenDev}>
      <img alt="headerImage" src={require("../images/cute bengal kitten.jpg")} width = "350" height = "400"/>
  </div>*/}
      {/*<div className={OwnersInfoCSS.txtKittenDev}>*/}
      <h3>  Here you can see the entire process your kitten will take from birth to the day it goes home. </h3>
      <h2> Link / Lay out the process on weekly or biweekly, AND monthly basis</h2>
      {/*</div>*/}
  </div>
  );

}

/**************************************** Preparing For Your Kitten *********************************************************/
const PrepareForKitten = () => {
  return (
  <div className={OwnersInfoCSS.containerRowBox}>
    <div className={OwnersInfoCSS.containerRow2}>
      <h1 className={OwnersInfoCSS.bold}> Preparing For Your Kitten </h1>
      <h3> ___________________________________</h3>
      <h3> When you pick up your adorable kitten, it will go smoothly if you anticipate and prepare for the coming of that small bundle of joy and energy into your house.
            Here are a few helpful tips and guidelines that can make the transition easier on you and your kitten.</h3>
      <h2> Video for preparing (link)</h2>
    </div>
    <div className={OwnersInfoCSS.containerRow1}>
      <h1 className={OwnersInfoCSS.bold}> Pic of a Kitten </h1>
    </div>
  </div>
  );
}

/**************************************** Medical Information & Vet Things *********************************************************/
const VetInfo = () => {

  return (
    <div className={OwnersInfoCSS.containerBox}>
      <h1 className={OwnersInfoCSS.bold}> Medical Information and Vet Things </h1>
      <h2>_________________________</h2>
      <h2> Vaccinations and Deworming (probably it’s own section) <br/> Shots: Parvo, Distemper, Flu, etc.<br/> <br/> Spaying and Neutering, OR <br/>Hysterectomy (for girls) or a Vasectomy (for boys) 
          <br/> At what age should it be performed? Benefits? Drawbacks? <br/> <br/>
          Any health concerns with the breed or kittens in general that new owners need to be aware of or be on the lookout for. </h2>
      <h2> _________________________</h2>
      <div className={OwnersInfoCSS.imgCenter}>
      <img alt="headerImage" src={require("../images/bengal-cat.jpg")} width = "1000" height = "500"/>
      </div>
    </div>
  );

}

/**************************************** Training Your Kitten *********************************************************/
const KittenTraining = () => {
  return (
  <div className={OwnersInfoCSS.containerRowBox}>
    <div className={OwnersInfoCSS.containerRow1}>
      <h2 className={OwnersInfoCSS.bold}> Pic of a kitten in training </h2>
      <img alt="headerImage" src={require("../images/How-Do-I-Exercise-a-Bengal-Cat.jpg")} width = "700" height = "450"/>
    </div>
    <div className={OwnersInfoCSS.containerRow2}>
      <h1 className={OwnersInfoCSS.bold}> Training </h1>
      <h2> ___________________________________</h2>
      <h3> How to train a kitten? <br/>
           Training courses? <br/>
           Training resources? <br/>
           Any offers with training? <br/>
           Benefits of training you kitten. </h3>

    </div>
  </div>
  );
}
 
/**************************************** Pet Insurance *********************************************************/
const PetInsurance = () => {

  return (
    <div className={OwnersInfoCSS.containerRowBox2}>
      <div className={OwnersInfoCSS.containerRow1}>
        <h1 className={OwnersInfoCSS.bold}> ~~~~~~~~~~~~~ Pet Insurance ~~~~~~~~~~~~~ </h1>
        {/*<h3>_________________________________________________________________________________________</h3>*/}
        <h3> Benefits of pet insurance and, <br/> 
             Recommendations for different insurance companies.<br/> 
             Trupanion? ASPCA? etc.</h3>
      </div>
    </div>
  );
}

/**************************************** Social Media *********************************************************/
/*const SocialMedia = () => {

  return (
    <div> 
      <h1 className = {OwnersInfoCSS.bold}> Follow Us On</h1>
      <img alt="headerImage" src={require("../images/realistic-social-media-logotype-collection.jpg")} width = "700" height = "450"/>
    </div>
  )
}*/


export default OwnersInfo;