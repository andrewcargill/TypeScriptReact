import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState';
import MiddleWelcome from './MiddleWelcome';
import MiddlePreStart from './MiddlePreStart';

function MiddleMainContainer() {
  const { ridersReady } = useAppContext();
  


  return (
    <div>
      <div>
        <p>Main Container</p> 

        {ridersReady ? <MiddleWelcome /> : <MiddlePreStart />}
        
        
      </div>
    </div>
  );
}

export default MiddleMainContainer;
