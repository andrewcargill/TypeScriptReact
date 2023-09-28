import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../AppState'; 
import Timer from './Timer';

function TimerActiveContainer() {
  const { storedNames, updateStoredNames } = useAppContext();
  const { isActive, toggleActive } = useAppContext(); 


  return (
    <div>
      <div>
      <Timer />
      </div>

       
      
      
    </div>
  );
}

export default TimerActiveContainer;
