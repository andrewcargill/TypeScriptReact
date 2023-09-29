import React from 'react';
import { useAppContext } from '../../../AppState'; // Import the context hook
import ActiveRound from './ActiveCompetition/ActiveRound';

function MiddlePreStart() {
  const { storedNames, updateStoredNames, nextRider } = useAppContext();
  const { isActive, toggleActive, toggleTimer } = useAppContext();

  const handleToggleActiveAndToggleTimer = () => {
    toggleActive();
    toggleTimer();
  }

  return (
    <div>
      <div>
        <div><p>(MiddlePreStart)</p></div>

        {/* Active round screen toggled on isActive state */}
        <div>
          {isActive ? <ActiveRound /> :
            <div>
              <p>
                Get Ready to ride!
              </p>
              <p>
                The first rider will be: {nextRider !== -1 ? storedNames[nextRider]?.name : 'None'}
              </p>
            </div>
          }</div>

        <button onClick={handleToggleActiveAndToggleTimer}>
          {isActive ? 'End Comp' : 'Start Timer'}
        </button>
      </div>
    </div>
  );
}

export default MiddlePreStart;
