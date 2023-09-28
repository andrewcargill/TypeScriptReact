import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook
import ActiveRound from './ActiveCompetition/ActiveRound';

function MiddlePreStart() {
  const { storedNames, updateStoredNames } = useAppContext();
  const { isActive, toggleActive, toggleTimer } = useAppContext(); 

  const findNextRider = () => {
    return storedNames.find((rider) => rider.next === true);
  };

  const nextRider = findNextRider();

  const handleToggleActiveAndToggleTimer = () => {
    toggleActive();
    toggleTimer();
  }


  return (
    <div>
      <div>

        {/* Active round screen toggled on isActive state */}
        <div>{isActive ? 
        
        <ActiveRound />
        : 
        
        <div>
          <p>
          Get Ready to ride! 
          </p>
          <p>
            The first rider will be: {nextRider?.name || 'None'}
          </p>
          
          </div>
        
        
        
        }</div>
        
        <button onClick={handleToggleActiveAndToggleTimer}>
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
