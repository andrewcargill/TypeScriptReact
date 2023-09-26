import React, { useEffect, useState } from 'react';
import { useAppContext } from '../AppState'; // Import the context hook

function ResultsSection() {
  const { storedNames, updateStoredNames } = useAppContext();
  const { isActive, toggleActive } = useAppContext(); 


  return (
    <div>
      <div>
        <p>Competition Status: {isActive ? 'Active' : 'Inactive'}</p>
        <button onClick={toggleActive}>
          {isActive ? 'End Comp' : 'Start Comp'}
        </button>
      </div>
      <div>
      {storedNames[0]}
      </div>
       
      
      
    </div>
  );
}

export default ResultsSection;
