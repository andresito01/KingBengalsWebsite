import React from 'react';
import OwnersInfoCSS from "./styles/OwnersInfo.module.css";
import WebNavHeader from "../components/WebNavHeader";

/*******************************Owner's Info***************************** */

const OwnersInfo = () => {

  return (
    <div className = {OwnersInfoCSS.ownersInfoPage}>
      <WebNavHeader/>
      <img className={OwnersInfoCSS.img1} alt='headerImage' src={require("../images/bengal-cat-1.jpg")}/>
      <div className={OwnersInfoCSS.backgroundLayer}>
        <div className={OwnersInfoCSS.headerContainerProducts}>
          <h1 className={OwnersInfoCSS.underline}>Products we Recommend</h1>
        </div>
      </div>
    </div>
  )
}
  
  export default OwnersInfo;