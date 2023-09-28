import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook

function MiddlePreStart() {
  const { storedNames, updateStoredNames } = useAppContext();
  const { isActive, toggleActive } = useAppContext(); 


  return (
    <div>
      <div>
        <p>Competition Status: {isActive ? 'Active' : 'Inactive'}</p>
        <div>
          <p>
          Get Ready to ride! 
          </p>
          <p>
            The first rider will be: {storedNames[0].name}
          </p>
          
          </div>
        <button onClick={toggleActive}>
          {isActive ? 'End Comp' : 'Start Timer'}
        </button>
      </div>
      <div>
      {storedNames[0].name}
      </div>
       
      
      
    </div>
  );
}

export default MiddlePreStart;
