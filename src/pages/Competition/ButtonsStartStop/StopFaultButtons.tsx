import React from 'react';
import { useAppContext } from '../../../AppState';

function StopFaultButtons() {
  const { storedNames, updateStoredNames, nextRider, updateNextRider } = useAppContext();
  const { isActive, toggleTimer } = useAppContext();

  const findNextRider = () => {
    // Find the index of the next rider
    return storedNames.findIndex((rider) => rider.finished === false);
  };

  const handleFinishedClick = () => {
    if (nextRider >= 0 && nextRider < storedNames.length) {
      // Create a copy of the storedNames array
      const updatedNames = [...storedNames];
      // Set the 'finished' property to true for the next rider
      updatedNames[nextRider].finished = true;

      // Update nextRider to the next unfinished rider, if available
      const nextUnfinishedRider = findNextRider();
      updateNextRider(nextUnfinishedRider);

      // Update the storedNames array with the modified riders
      updateStoredNames(updatedNames);
    }
  };

  return (
    <div>
      <div>
        <div>
          <p>(StopFaultButtons)</p>
        </div>
        <div>
          {isActive ? (
            <div>
              <button onClick={toggleTimer}>STOP</button>
              <button>FAULT</button>
              <button onClick={handleFinishedClick}>FINISHED</button>
            </div>
          ) : (
            <div>
              <p>(empty)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StopFaultButtons;
