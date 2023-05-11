import React, { useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import NavBarUnderLayerCSS from "./styles/WebNavHeader.module.css"
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
    
    <div className={NavBarUnderLayerCSS.headerContainer2}>
      {/*<img className={Mobile ? NavBarUnderLayerCSS.logoImgResponsive : NavBarUnderLayerCSS.logoImg} id="leftHeaderImg" alt='logo' src={require("../images/KB logo.png")} />*/}
      <div className={Mobile ? NavBarUnderLayerCSS.middleResponsive : NavBarUnderLayerCSS.middle} id="middle">
        <div className={NavBarUnderLayerCSS.headerTitleContainer}>
          <div className={NavBarUnderLayerCSS.headerKingBengals}>
          KingBengals</div>
          <div className={NavBarUnderLayerCSS.headerCattery}>Cattery</div>
          <div className={NavBarUnderLayerCSS.rightImgContainer}>
            <img id={NavBarUnderLayerCSS.rightHeaderImg} alt='cat' src={require("../images/CatWebNavHeader2NoBackground.png")} />
          </div>  
        </div>
        <div className={NavBarUnderLayerCSS.middleNavLinks} id="middleNavLinks">
          <div className={Mobile ? NavBarUnderLayerCSS.navLinksResponsive : NavBarUnderLayerCSS.navLinks} id="navLinks">
            <div className={NavBarUnderLayerCSS.link}>
              <NavLink to="/home" 
                className={(navData) => navData.isActive ? NavBarUnderLayerCSS.active : ""}>
                  Home</NavLink>
            </div>
            <div className={NavBarUnderLayerCSS.link}>
              <NavLink to="/reserveakitten" 
                className={(navData) => navData.isActive ? NavBarUnderLayerCSS.active : ""}>
                  ReserveKitten</NavLink>
            </div>
            <div className={NavBarUnderLayerCSS.link}>
              <NavLink to="/about" 
                className={(navData) => navData.isActive ? NavBarUnderLayerCSS.active : ""}>
                  About</NavLink>
            </div>
            <div className={NavBarUnderLayerCSS.link}>
              <NavLink to="/ourcats" 
                className={(navData) => navData.isActive ? NavBarUnderLayerCSS.active : ""}>
                  Cats</NavLink>
            </div>
            <div className={NavBarUnderLayerCSS.link}>
              <NavLink to="/litterupdates" 
                className={(navData) => navData.isActive ? NavBarUnderLayerCSS.active : ""}>
                  Updates</NavLink>
            </div>
            <div className={NavBarUnderLayerCSS.link}>
              <NavLink to="/ownersinfo" 
                className={(navData) => navData.isActive ? NavBarUnderLayerCSS.active : ""}>
                  Owners</NavLink>
            </div>
            <div className={NavBarUnderLayerCSS.link}>
              <NavLink to="/contact" 
                className={(navData) => navData.isActive ? NavBarUnderLayerCSS.active : ""}>
                  Contact</NavLink>
            </div>
            <div className={NavBarUnderLayerCSS.link}>
              <NavLink to="/breedinfo" 
                className={(navData) => navData.isActive ? NavBarUnderLayerCSS.active : ""}>
                  Breed</NavLink>
            </div>
          </div>
        </div>
        {/*<h5> Home ReserveAKitten AboutUs OurCats LitterUpdates InfoForOwners ContactUs BreedInfo</h5>*/}
  </div> 
        <button className={NavBarUnderLayerCSS.navBtn} onClick={checkResponsiveView}>
            {Mobile ? <FaTimes /> : <FaBars />}
        </button>
      
    </div>
     
  )
}

export default NavBarUnderLayer;