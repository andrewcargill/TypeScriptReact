import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState';

function StopFaultButtons() {
  const { storedNames, updateStoredNames, nextRider, updateNextRider, timerValue, activeTimer, updateTimerReset } = useAppContext();
  const { isActive, toggleTimer } = useAppContext();
  const [buttonLabel, setButtonLabel] = useState("Stop");


  const findNextRider = () => {
    // Find the index of the next rider
    return storedNames.findIndex((rider) => rider.finished === false);
  };

  const handleFinishedClick = () => {

    if (nextRider >= 0 && nextRider < storedNames.length) {
      while (timerValue === null) {
        setTimeout(() => {
        }, 100); 
      }
      const updatedNames = [...storedNames];
      updatedNames[nextRider].finished = true;
      updatedNames[nextRider].time = timerValue;

      const nextUnfinishedRider = findNextRider();
      updateNextRider(nextUnfinishedRider);
      updateStoredNames(updatedNames);
    }
  };

  const handleResetTimer = () => {
    updateTimerReset(true);
  }

  useEffect(() => {
    console.log('activeTimer!!!: ' + activeTimer)
    // This effect will run whenever toggleTimer changes
    // You can add any logic here that needs to happen when toggleTimer changes.
  }, [activeTimer]);

  return (
    <div>
      <div>
        <div>
          {/* <p>(StopFaultButtons)</p> */}
        </div>
        <div>
          {isActive ? (
            <div>

              <button onClick={() => {
                toggleTimer();
                setButtonLabel((prevLabel) => (prevLabel === "Stop" ? "Start" : 'Stop'));
              }}>
                {isActive ? buttonLabel : "Start Timer"}
              </button>
              <button>Fault</button>

              <button onClick={handleFinishedClick} disabled={activeTimer}>
                SUBMIT
              </button>
              <button onClick={handleResetTimer} disabled={true}>
                RESET
              </button>
              {/* {!toggleTimer && (
            <button
              onClick={handleFinishedClick}
              className="active-button"
              disabled={toggleTimer}
            >
              FINISHED
            </button>
          )} */}
            </div>
          ) : (
            <div>
              {/* <p>(empty)</p> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StopFaultButtons;
