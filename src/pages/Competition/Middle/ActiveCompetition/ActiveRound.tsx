import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../AppState'; 

function ActiveRound() {
  const { storedNames, updateStoredNames } = useAppContext();
  const { isActive, toggleTimer } = useAppContext(); 


  return (
    <div>
      <div>
      
        <div>Rider on Course</div>
        <button onClick={toggleTimer} >
          STOP
        </button>
        <button >
          FAULT
        </button>
      </div>

       
      
      
    </div>
  );
}

export default ActiveRound;
