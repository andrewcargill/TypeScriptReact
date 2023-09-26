import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState'; 

function ResultsSection() {
  const { storedNames, updateStoredNames } = useAppContext();
  const { isActive, toggleActive } = useAppContext(); 


  return (
    <div>
      <div>
        <p>Competition Status: {isActive ? 'Active' : 'Inactive'}</p>
        <div>Get Ready to ride! Click start to start the clock!</div>
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
