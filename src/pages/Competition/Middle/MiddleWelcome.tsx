import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook

function MiddleWelcome() {
  


  return (
    <div className='title-container'>
      <div>
        <p>Welcome. Please add the riders below!</p> 
      </div>
    </div>
  );
}

export default MiddleWelcome;
