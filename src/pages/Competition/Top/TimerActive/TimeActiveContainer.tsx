import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../AppState'; 
import Timer from './Timer';

function TimerActiveContainer() {
  const { storedNames, updateStoredNames } = useAppContext();
  const { isActive, toggleActive } = useAppContext(); 

  interface Rider {
    name: string;
    time: string;
    next: boolean;
    finished: boolean;
  }
  
  const getNextRider = (): Rider | undefined => {
    return storedNames.find((rider) => rider.next);
  };

  
    // Call the function to get the next rider with next = false
    const nextRider = getNextRider();

  return (
    <div>
      <div>
      <div>
      {/* Display the next rider if it exists */}
      {nextRider && (
        <div>
    
          <p>Next Rider: {nextRider.name}</p>
          {/* You can display other information about the rider here */}
        </div>
      )}

      {/* Your component logic here... */}
    </div>
        <div><p>(TimerActiveContainer)</p></div>

      <Timer />
      </div>

       
      
      
    </div>
  );
}

export default TimerActiveContainer;
