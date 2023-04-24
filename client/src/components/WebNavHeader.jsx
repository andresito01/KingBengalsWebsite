import React, { useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useNavigate, NavLink } from 'react-router-dom';
import WebNavHeaderCSS from "./styles/WebNavHeader.module.css"
const WebNavHeader = () => {

  let navigate = useNavigate();
  const [Mobile, setMobile] = useState(false)

  const checkResponsiveView = () => {
    setMobile(!Mobile);
  }

  const windowWidthCheck = () => {
    if (window.innerWidth > 1213 && Mobile === true) {
      setMobile(false);
    }
  }
  window.addEventListener('resize', windowWidthCheck)

  return (
    <div className={WebNavHeaderCSS.headerContainer}>
      <img className={Mobile ? WebNavHeaderCSS.leftHeaderImgResponsive : WebNavHeaderCSS.logoContainer} id="leftHeaderImg" alt='logo' src={require("../images/KB logo.png")} />
      <div className={Mobile ? WebNavHeaderCSS.middleResponsive : WebNavHeaderCSS.middle} id="middle">
        <div className={WebNavHeaderCSS.headerTitleContainer}>
          <div className={WebNavHeaderCSS.headerKingBengals}>
          KingBengals</div>
          <div className={WebNavHeaderCSS.headerCattery}>Cattery</div>
          <div className={WebNavHeaderCSS.rightImgContainer}>
            <img id={WebNavHeaderCSS.rightHeaderImg} alt='cat' src={require("../images/CatWebNavHeader2NoBackground.png")} />
          </div>  
        </div>
        <div className={WebNavHeaderCSS.middleNavLinks} id="middleNavLinks">
          <div className={Mobile ? WebNavHeaderCSS.navLinksResponsive : WebNavHeaderCSS.navLinks} id="navLinks">
            <div className={WebNavHeaderCSS.link}>
              <NavLink to="/home" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  Home</NavLink>
            </div>
            <div className={WebNavHeaderCSS.link}>
              <NavLink to="/reserveakitten" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  Reserve a Kitten</NavLink>
            </div>
            <div className={WebNavHeaderCSS.link}>
              <NavLink to="/about" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  About Us</NavLink>
            </div>
            <div className={WebNavHeaderCSS.link}>
              <NavLink to="/ourcats" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  Our Cats</NavLink>
            </div>
            <div className={WebNavHeaderCSS.link}>
              <NavLink to="/litterupdates" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  Litter Updates</NavLink>
            </div>
            <div className={WebNavHeaderCSS.link}>
              <NavLink to="/ownersinfo" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  Info for Owners</NavLink>
            </div>
            <div className={WebNavHeaderCSS.link}>
              <NavLink to="/contact" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  Contact Us</NavLink>
            </div>
            <div className={WebNavHeaderCSS.link}>
              <NavLink to="/breedinfo" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  Breed Info</NavLink>
            </div>
          </div>
        </div>
      </div>  
        <button className={WebNavHeaderCSS.navBtn} onClick={checkResponsiveView}>
            {Mobile ? <FaTimes /> : <FaBars />}
        </button>  
    </div>
  )
}

export default WebNavHeader;