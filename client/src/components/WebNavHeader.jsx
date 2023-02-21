import React, { useState, useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import WebNavHeaderCSS from "./styles/WebNavHeader.module.css"

const WebNavHeader = () => {
  let navigate = useNavigate();

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return (
    <header className={WebNavHeaderCSS.navBar}>
      <div className={WebNavHeaderCSS.left}>
        <img alt='cat' src={require("../images/CatWebNavHeaderNoBackground.png")} />
        {/* <div className='link-left' onClick={() => navigate("/breedinfo")}>Breed Info.</div> */}
      </div>
      <div className={WebNavHeaderCSS.middle}>
        <div className={WebNavHeaderCSS.headerTitle}>
          <div className={WebNavHeaderCSS.headerKingBengals}>
          KingBengals</div>
          <div className={WebNavHeaderCSS.headerCattery}>Cattery</div>
          <img alt='cat' src={require("../images/CatWebNavHeader2NoBackground.png")} />
        </div>
        
        <div className={WebNavHeaderCSS.navLinks} ref={navRef}>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/home")}>Home</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/reserveakitten")}>Reserve A Kitten</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/ourcats")}>Our Cats</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/litterupdates")}>Litter Updates</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/about")}>About Us</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/contact")}>Contact Us</div>
          <div className={WebNavHeaderCSS.link} onClick={() => navigate("/breedinfo")}>Breed Info</div>
        </div>
        
      </div>
      {/* <div className='right'>
        <div className='link-right' onClick={() => navigate("/contact")}>Contact Us</div>
      </div> */}
    </header>
  )
}

export default WebNavHeader;