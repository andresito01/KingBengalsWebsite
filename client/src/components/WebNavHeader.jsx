import React, { useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import WebNavHeaderCSS from "./styles/WebNavHeader.module.css"
const WebNavHeader = () => {

  let navigate = useNavigate();
  const [Mobile, setMobile] = useState(false)

  const checkResponsiveView = () => {
    var x = document.getElementById("navLinks")
    var y = document.getElementById("middle")
    var z = document.getElementById("leftHeaderImg")

    if (x.className === `${WebNavHeaderCSS.navLinks}`) {
      x.className = `${WebNavHeaderCSS.navLinksResponsive}`;
      y.className = `${WebNavHeaderCSS.middleResponsive}`;
      z.className = `${WebNavHeaderCSS.leftHeaderImgResponsive}`;
      setMobile(true)
    } else {
      x.className = `${WebNavHeaderCSS.navLinks}`
      y.className = `${WebNavHeaderCSS.middle}`;
      z.className = `${WebNavHeaderCSS.leftHeaderImg}`;
      setMobile(false)
    }
  }

  const windowWidthCheck = () => {
    if (window.innerWidth > 1110) 
      var x = document.getElementById("navLinks")
      var y = document.getElementById("middle")
      var z = document.getElementById("leftHeaderImg")
      x.className = `${WebNavHeaderCSS.navLinks}`
      y.className = `${WebNavHeaderCSS.middle}`;
      z.className = `${WebNavHeaderCSS.leftHeaderImg}`;
      setMobile(false)
  }
  window.addEventListener('resize', windowWidthCheck)

  return (
    <div className={WebNavHeaderCSS.headerContainer}>
      <img className={WebNavHeaderCSS.leftHeaderImg} id="leftHeaderImg" alt='cat' src={require("../images/CatWebNavHeaderNoBackground.png")} />
      {/* <div className={WebNavHeaderCSS.leftImgContainer}>
        <img id={WebNavHeaderCSS.leftHeaderImg} alt='cat' src={require("../images/CatWebNavHeaderNoBackground.png")} />
      </div> */}
      <div className={WebNavHeaderCSS.middle} id="middle">
        <div className={WebNavHeaderCSS.headerTitleContainer}>
          <div className={WebNavHeaderCSS.headerKingBengals}>
          KingBengals</div>
          <div className={WebNavHeaderCSS.headerCattery}>Cattery</div>
          <div className={WebNavHeaderCSS.rightImgContainer}>
            <img id={WebNavHeaderCSS.rightHeaderImg} alt='cat' src={require("../images/CatWebNavHeader2NoBackground.png")} />
          </div>
        </div>
        
        <div className={WebNavHeaderCSS.navLinks} id="navLinks">
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/home")}>Home</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/reserveakitten")}>Reserve A Kitten</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/ourcats")}>Our Cats</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/litterupdates")}>Litter Updates</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/about")}>About Us</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/contact")}>Contact Us</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/breedinfo")}>Breed Info</div>

          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/ownersinfo")}>Owner's Info</div>
        </div> 
        <button className={WebNavHeaderCSS.navBtn} onClick={checkResponsiveView}>
            {Mobile ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </div>
  )
}

export default WebNavHeader;