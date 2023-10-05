import React, { useEffect, useState, useContext } from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook
import TopWelcome from './TopWelcome';
import TimerActiveContainer from './TimerActive/TimeActiveContainer';

function TopMainContainer() {
  const { isActive } = useAppContext();

  return (
    <div>
      {isActive ? ( <TimerActiveContainer />  ) : ( <TopWelcome /> )}
    </div>
  );
}

export default TopMainContainer;
