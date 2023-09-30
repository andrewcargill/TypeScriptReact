import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState';

function StopFaultButtons() {
  const { storedNames, updateStoredNames, nextRider, updateNextRider, timerValue } = useAppContext();
  const { isActive, toggleTimer } = useAppContext();
  const [buttonLabel, setButtonLabel] = useState("Start");


  const findNextRider = () => {
    // Find the index of the next rider
    return storedNames.findIndex((rider) => rider.finished === false);
  };

  const handleFinishedClick = () => {

    if (nextRider >= 0 && nextRider < storedNames.length) {
      // Wait for timerValue to become non-null
      while (timerValue === null) {
        setTimeout(() => {
          // You can add a timeout here to avoid an infinite loop
        }, 100); // Adjust the timeout duration as needed
      }

      // Now timerValue is not null, you can proceed with your logic
      // Example: update state or trigger a function

      // Create a copy of the storedNames array
      const updatedNames = [...storedNames];
      // Set the 'finished' property to true for the next rider
      updatedNames[nextRider].finished = true;
      updatedNames[nextRider].time = timerValue;

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

              <button onClick={() => {
                toggleTimer();
                setButtonLabel((prevLabel) => (prevLabel === "Start" ? "Stop" : "Start"));
              }}>
                {isActive ? buttonLabel : "Start Timer"}
              </button>
              <button>FAULT</button>
              <button onClick={handleFinishedClick} disabled={!toggleTimer}>
  FINISHED
</button>
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
