import React from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook
import ActiveRound from './ActiveCompetition/ActiveRound';
import { Button } from '@mui/material';

function MiddlePreStart() {
  const { storedNames, updateStoredNames, nextRider, updateNextRider } = useAppContext();
  const { isActive, toggleActive, toggleTimer } = useAppContext();

  const handleToggleActiveAndToggleTimer = () => {
    toggleActive();
  }


  interface Rider {
    name: string;
    time: number;
    finished: boolean;
  }

  const ResetRiderData = () => {
    // Create a new array with rider names only
    const riderNames = storedNames.map((rider) => ({ name: rider.name, time: 0, finished: false }));
    updateNextRider(0);
    updateStoredNames(riderNames); // Update storedNames with the new array
  };

  return (
    <div>
      <div>
        {/* <div><p>(MiddlePreStart)</p></div> */}

        {/* Active round screen toggled on isActive state */}
        <div>
          {isActive ? <ActiveRound /> :
            <div>
              <p>
                Get Ready to ride!
              </p>
              {/* <p>
                The first rider will be {nextRider !== -1 ? storedNames[nextRider]?.name : 'None'}
              </p> */}
            </div>
          }</div>
        <div className='end-reset-comp-buttons-container'>
          <Button variant='outlined' size='small' onClick={handleToggleActiveAndToggleTimer}>
            {isActive ? 'End Competition' : 'Start Competition'}
          </Button>
          <Button variant='outlined' size='small' onClick={ResetRiderData}>
            Rest Competition
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MiddlePreStart;
