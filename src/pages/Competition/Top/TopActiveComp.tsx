import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook
import TimerActiveContainer from './TimerActive/TimeActiveContainer';


function TopActiveComp() {
  


  return (
    <div>
      <div>
        <TimerActiveContainer />
      </div>
    </div>
  );
}

export default TopActiveComp;
