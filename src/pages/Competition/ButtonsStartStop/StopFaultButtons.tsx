import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState';

function StopFaultButtons() {
  const { storedNames, updateStoredNames, nextRider, updateNextRider, timerValue, activeTimer, updateTimerReset } = useAppContext();
  const { isActive, toggleTimer } = useAppContext();
  const [buttonLabel, setButtonLabel] = useState("Start");


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
                setButtonLabel((prevLabel) => (prevLabel === "Start" ? "Stop" : 'Start'));
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
