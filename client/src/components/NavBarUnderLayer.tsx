import React, { useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import WebNavHeaderCSS from "./styles/WebNavHeader.module.css"
const NavBarUnderLayer = () => {

  //let navigate = useNavigate();
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
    
    <div className={WebNavHeaderCSS.headerContainer2}>
      {/*<img className={Mobile ? WebNavHeaderCSS.logoImgResponsive : WebNavHeaderCSS.logoImg} id="leftHeaderImg" alt='logo' src={require("../images/KB logo.png")} />*/}
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
            <div className={WebNavHeaderCSS.link2}>
              <NavLink to="/home" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  </NavLink>
            </div>
            <div className={WebNavHeaderCSS.link2}>
              <NavLink to="/reserveakitten" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  </NavLink>
            </div>
            <div className={WebNavHeaderCSS.link2}>
              <NavLink to="/about" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  </NavLink>
            </div>
            <div className={WebNavHeaderCSS.link2}>
              <NavLink to="/ourcats" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  </NavLink>
            </div>
            <div className={WebNavHeaderCSS.link2}>
              <NavLink to="/litterupdates" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  </NavLink>
            </div>
            <div className={WebNavHeaderCSS.link2}>
              <NavLink to="/ownersinfo" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  </NavLink>
            </div>
            <div className={WebNavHeaderCSS.link2}>
              <NavLink to="/contact" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  </NavLink>
            </div>
            <div className={WebNavHeaderCSS.link2}>
              <NavLink to="/breedinfo" 
                className={(navData) => navData.isActive ? WebNavHeaderCSS.active : ""}>
                  .</NavLink>
            </div>
          </div>
        </div>
        {/*<h5> Home ReserveAKitten AboutUs OurCats LitterUpdates InfoForOwners ContactUs BreedInfo</h5>*/}
  </div> 
        <button className={WebNavHeaderCSS.navBtn} onClick={checkResponsiveView}>
            {Mobile ? <FaTimes /> : <FaBars />}
        </button>
      
    </div>
     
  )
}

export default NavBarUnderLayer;