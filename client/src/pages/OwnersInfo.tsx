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
    <div className={OwnersInfoCSS.headerContainerProducts}>
      <h1 className={OwnersInfoCSS.bold}> Products We Recommend </h1>
      <h3>___________________________________________________________________________________________________________________</h3>
      <h3> Below is a list of/link to products we recommend for your kitten. From toys, treats, catteries?, bedding, and training accessories? </h3>
      {/*<h3> From toys, treats, catteries?, bedding, and training accessories? </h3> */}
      <h2> o==o  Link/List  o==o </h2>
    </div>

    /*<div className={OwnersInfoCSS.procuctsRecommend}>
        <h1 className={OwnersInfoCSS.bold}> Products We Recommend </h1>
          <h3>___________________________________________________________________________________________________________________</h3>
          <h3> Below is a list of/link to products we recommend for your kitten. From toys, treats, catteries?, bedding, and training accessories? </h3>
          {/*<h3> From toys, treats, catteries?, bedding, and training accessories? </h3> }
          <h2> o==o  Link/List  o==o </h2>*/
    /*</div>*/
  );
};

export default OwnersInfo;