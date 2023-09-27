import React, { useEffect, useState, useContext } from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook
import TopActiveComp from './TopActiveComp';

function TopPreStart() {
  const { isActive } = useAppContext();
  


  return (
    <div>
      <div>
        
          {isActive ? (
             <TopActiveComp />
          ):(
            <div><p>top pre screen</p></div>
            
          )}

      </div>
    </div>
  );
}

export default TopPreStart;
