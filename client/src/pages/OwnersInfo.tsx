//import React, {useState} from 'react';
import React from 'react';
import OwnersInfoCSS from "./styles/OwnersInfo.module.css";
import WebNavHeader from "../components/WebNavHeader";

/*******************************Owner's Info***************************** Note: A link on line 15 for pro-recomm*/
/**/

/*const OwnersInfo: React.FC = () => {
  const fontSizeHeader = {fontSize: "50px"}*/

const OwnersInfo = () => {
  return (
    <div className = {OwnersInfoCSS.backgroundLayer}>

      <WebNavHeader/>

      {/*<img className={OwnersInfoCSS.img1} alt='headerImage' src={require("../images/bencat - OwnersInfo header image.jpg")}/>
      <div className={OwnersInfoCSS.headerContainerOwnersInfo} style={fontSizeHeader}>
       <h1> Owner's Info </h1>
      </div>*/}

      <OwnersInfoPageHeader/>

      <div className={OwnersInfoCSS.backgroundLayer}> 
        {/*<div className={OwnersInfoCSS.headerContainerProducts}>
          <h1 className={OwnersInfoCSS.bold}> Products We Recommend </h1>
          <h3>___________________________________________________________________________________________________________________</h3>
          <h3> Below is a list of/link to products we recommend for your kitten. From toys, treats, catteries?, bedding, and training accessories? </h3>
          {/*<h3> From toys, treats, catteries?, bedding, and training accessories? </h3> }
          <h2> o==o  Link/List  o==o </h2>
        </div>*/}

        <ProductsRecommend/>

        <KittenDevelopment/>

        <PrepareForKitten/>

      </div>
    </div>
  )
}

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

const ProductsRecommend = () => {

  return (
    <div className={OwnersInfoCSS.containerProductsRecom}>
      <h1 className={OwnersInfoCSS.bold}> Products We Recommend </h1>
      <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
      <h3> Below is a list of/link to products we recommend for your kitten. <br/> Toys and Treats <br/>Catteries? and crates <br/> Bedding and grooming products<br/> Training accessories? </h3>
      {/*<h3> From toys, treats, catteries?, bedding, and training accessories? </h3> */}
      <h2> A Link or List </h2>
    </div>

    /*<div className={OwnersInfoCSS.procuctsRecommend}>
        <h1 className={OwnersInfoCSS.bold}> Products We Recommend </h1>
          <h3>___________________________________________________________________________________________________________________</h3>
          <h3> Below is a list of/link to products we recommend for your kitten. From toys, treats, catteries?, bedding, and training accessories? </h3>
          {/*<h3> From toys, treats, catteries?, bedding, and training accessories? </h3> }
          <h2> o==o  Link/List  o==o </h2>*/
    /*</div>*/
  );

}


const KittenDevelopment = () => {
  return (
    <div className={OwnersInfoCSS.containerProductsRecom}>
      <h1 className={OwnersInfoCSS.bold}> Kitten Development Stages </h1>
      <h3>___________________________________________________________________________________________________________________</h3>
      <div className={OwnersInfoCSS.imgKittenDev}>
      <img alt="headerImage" src={require("../images/cute bengal kitten.jpg")} width = "350" height = "400"/>
      </div>
      {/*<div className={OwnersInfoCSS.txtKittenDev}>*/}
      <h3>  Here you can see the entire process your kitten will take from birth to the day it goes home. </h3>
      <h2> Link / Lay out the process</h2>
      {/*</div>*/}
  </div>
  );

}

const PrepareForKitten = () => {
  return (
  <div className={OwnersInfoCSS.containerPrepareForKitten}>
    <div className={OwnersInfoCSS.containerPrepare}>
      <h1 className={OwnersInfoCSS.bold}> Preparing For Your Kitten </h1>
      <h3> ___________________________________</h3>
      <h3> When you pick up your adorable kitten, it will go smoothly if you anticipate and prepare for the coming of that small bundle of joy and energy into your house.
            Here are a few helpful tips and guidelines that can make the transition easier on you and your kitten.</h3>
      <h2> Video for preparing (link)</h2>
    </div>
    <div className={OwnersInfoCSS.containerPrepare}>
      <h1 className={OwnersInfoCSS.bold}> Pic of a Kitten </h1>
    </div>
  </div>
  );
}


export default OwnersInfo;