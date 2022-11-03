import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/WebNavHeader.css"

const WebNavHeader = () => {
  let navigate = useNavigate();

  return (
    <div className='navContainer'>
      <div className='left'>
        <div className='link-left' onClick={() => navigate("/breedinfo")}>Breed Info</div>
      </div>
      <div className='middle'>
        <div className='header'>
          <div className='header-kingbengals'>
          KingBengals</div>
          <div className='header-cattery'>Cattery</div>
        </div>
        
        <div className='middle-links'>
          <div className='link' onClick={() => navigate("/home")}>Home</div>
          <div className='link' onClick={() => navigate("/reserveakitten")}>Reserve A Kitten</div>
          <div className='link' onClick={() => navigate("/ourcats")}>Our Cats</div>
          <div className='link' onClick={() => navigate("/about")}>About Us</div>
          <div className='link' onClick={() => navigate("/reviews")}>Reviews</div>
          <div className='link' onClick={() => navigate("/litterupdates")}>Litter Updates</div>
        </div>
      </div>
      <div className='right'>
        <div className='link-right' onClick={() => navigate("/contact")}>Contact Us</div>
      </div>
    </div>
  )
}

export default WebNavHeader;