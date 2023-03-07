import React from 'react';
import OwnersInfoCSS from "./styles/OwnersInfo.module.css";
import WebNavHeader from "../components/WebNavHeader";

/*******************************Owner's Info***************************** Note: A link on line 15 for pro-recomm*/
/**/

const OwnersInfo = () => {

  return (
    <div className = {OwnersInfoCSS.ownersInfoPage}>
      <WebNavHeader/>
      <img className={OwnersInfoCSS.img1} alt='headerImage' src={require("../images/bencat.jpg")}/>
      <div className={OwnersInfoCSS.backgroundLayer}>
        <div className={OwnersInfoCSS.headerContainerProducts}>
          <h1 className={OwnersInfoCSS.bold}> Products we Recommend </h1>
          <h3>____________________________________________________________________________________________</h3>
          <h3> Below is a list of/link to products we recommend for your kitten.</h3>
          <h3> From toys, treats, catteries?, bedding, and training accessories? </h3>
          <h2> o==o  Link/List  o==o </h2>
        </div>
      </div>
    </div>
  )
}
  
  export default OwnersInfo;