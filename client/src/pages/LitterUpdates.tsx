import React from 'react';
import WebNavHeader from '../components/WebNavHeader';
import "./styles/LitterUpdates.css"
const LitterUpdates = () => {

  return (
    <div className='litterUpdatesPage'>
      <WebNavHeader />
      <div className='litterInstructionContainer'>
        <h1>Litter Updates</h1>
        <p>Below you will find the information for the litter that are currently available for picking.<br/>Litter planning & info regarding cat pregnancy<br/>Explaining the litter characteristics: range of kittens in each litter<br/>Expected delivery dates will be provided<br/>lease read how to 'Reserve a Kitten' page thoroughly!<b/>Puppy photos and videos will be updated bi-weekly.</p>
      </div>
      <div className='litterCardWrapper'>
        <div className='litterCard'>
          <div className='parent'>
            <img className='parent1Image' alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
          <div className='parent'>
            <img className='parent2Image' alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
        </div>
        <div className='litterCard'>
          <div className='parent'>
            <img className='parent1Image' alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
          <div className='parent'>
            <img className='parent2Image' alt='parentImage' src={require("../images/Placeholder.png")} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LitterUpdates;