import React, { useState, useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import WebNavHeaderCSS from "./styles/WebNavHeader.module.css"

const WebNavHeader = () => {
  let navigate = useNavigate();

  const [Mobile, setMobile] = useState(false)

  const windowWidthCheck = () => {
    if (window.innerWidth > 944) 
      setMobile(false)
  }
  window.addEventListener('resize', windowWidthCheck)

  return (
    <div className={WebNavHeaderCSS.navBar}>
      <div className={WebNavHeaderCSS.leftImgContainer}>
        <img id={WebNavHeaderCSS.leftHeaderImg} alt='cat' src={require("../images/CatWebNavHeaderNoBackground.png")} />
        {/* <div className='link-left' onClick={() => navigate("/breedinfo")}>Breed Info.</div> */}
      </div>
      <div className={WebNavHeaderCSS.middle}>
        <div className={WebNavHeaderCSS.headerTitleContainer}>
          <div className={WebNavHeaderCSS.headerKingBengals}>
          KingBengals</div>
          <div className={WebNavHeaderCSS.headerCattery}>Cattery</div>
          <div className={WebNavHeaderCSS.rightImgContainer}>
            <img id={WebNavHeaderCSS.rightHeaderImg} alt='cat' src={require("../images/CatWebNavHeader2NoBackground.png")} />
          </div>
        </div>
        
        <div className={Mobile ? WebNavHeaderCSS.navLinksMobile : WebNavHeaderCSS.navLinks} onClick={() => setMobile(false)}>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/home")}>Home</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/reserveakitten")}>Reserve A Kitten</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/ourcats")}>Our Cats</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/litterupdates")}>Litter Updates</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/about")}>About Us</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/contact")}>Contact Us</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/breedinfo")}>Breed Info</div>
        </div>
      <button className={WebNavHeaderCSS.navBtn} onClick={() => setMobile(!Mobile)}>
        {Mobile ? <FaTimes /> : <FaBars />}
      </button>
        {/* <button className={WebNavHeaderCSS.navBtn} onClick={showNavbar}>
            <FaBars />
        </button> */}
      </div>
      {/* <div className='right'>
        <div className='link-right' onClick={() => navigate("/contact")}>Contact Us</div>
      </div> */}
    </div>
  )
}

export default WebNavHeader;