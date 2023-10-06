import React, { useEffect, useState } from 'react';
import image from '../../../media/images/homeimage.jpeg'

function TopWelcome() {
  return (
    <div className='title-container'>
      <div className="showjumping-title-container">
        <div className='showjumping-title'>
          <div>Izzi's </div>
          <h5>SHOW JUMPING TIMER </h5>
        </div>
      </div>
      <div className='title-image'>
        <img src={image} alt="Show Jumping" className="resized-image" />
      </div>
    </div>
  );
}

export default TopWelcome;
