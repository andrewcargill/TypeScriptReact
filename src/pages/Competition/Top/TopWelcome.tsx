import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook
import image from '../../../media/images/homeimage.jpeg'

function TopWelcome() {
  


  return (
    <div className='title-container'>
      <div className='showjumping-title'>
        <h5>SHOW JUMPING TIMER </h5> 
     
      </div>
      <div className='title-image'>
      <img src={image} alt="Show Jumping" className="resized-image" />
      </div>
    </div>
  );
}

export default TopWelcome;
