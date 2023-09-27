import React, { useEffect, useState, useContext } from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook
import TopWelcome from './TopWelcome';
import TopPreStart from './TopPreStart';
import TopActiveComp from './TopActiveComp';

function TopMainContainer() {
  const { ridersReady, storedNames, isActive } = useAppContext();



  return (
    <div>

      <p>Top Main Container</p>
      {ridersReady ? ( <TopWelcome /> ) : ( <TopPreStart /> )}

    </div>
  );
}

export default TopMainContainer;
