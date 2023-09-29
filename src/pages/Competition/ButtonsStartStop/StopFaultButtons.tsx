import React from 'react';
import { useAppContext } from '../../../AppState';

function StopFaultButtons() {
  const { storedNames, updateStoredNames } = useAppContext();
  const { isActive, toggleTimer } = useAppContext();

  const findNextRider = () => {
    return storedNames.find((rider) => rider.next === true);
  };
  const nextRider = findNextRider();

  const findFinishedRider = () => {
    return storedNames.find((rider) => rider.finished === true);
  };
  const finishedRider = findNextRider();

  const handleFinishedClick = () => {
    if (nextRider) {
      // Create a copy of the storedNames array
      const updatedNames = [...storedNames];
      // Find the index of the next rider
      const index = updatedNames.indexOf(nextRider);
      if (index !== -1) {
        // Set the 'finished' property to true for the next rider
        updatedNames[index].finished = true;
        updatedNames[index].next = false;
          // Find the last rider with 'finished' set to true
      const lastFinishedIndex = updatedNames
      .map((rider, i) => (rider.finished ? i : -1))
      .filter((index) => index !== -1)
      .pop();

    // Set the next rider based on the last finished rider
    if (lastFinishedIndex !== undefined && lastFinishedIndex + 1 < updatedNames.length) {
      updatedNames[lastFinishedIndex + 1].next = true;
    }

    // Update the storedNames array with the modified riders
    updateStoredNames(updatedNames);
      }
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
