import React, { useEffect, useState, useContext } from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook
import TopWelcome from './TopWelcome';
import TimerActiveContainer from './TimerActive/TimeActiveContainer';

function TopMainContainer() {
  const { ridersReady, storedNames, isActive } = useAppContext();



  return (
    <div>

      {/* <p>Top Main Container</p> */}
      {ridersReady ? ( <TopWelcome /> ) : ( <TimerActiveContainer /> )}

    </div>
  );
}

export default TopMainContainer;
