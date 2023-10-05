import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../AppState';
import { Button } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';
import TimerIcon from '@mui/icons-material/Timer';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

function Timer() {
  const { activeTimer, updateTimerValue, timerReset, updateTimerReset, timerValue, nextRider, storedNames, updateNextRider, updateStoredNames } = useAppContext();

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

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
      resetTimer();
    }
  };


  const startTimer = () => {
    if (!isRunning) {
      const newIntervalId = window.setInterval(updateTimer, 10);
      setIntervalId(newIntervalId);
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    console.log('StopTimer Function')
    if (isRunning && intervalId !== null) {

      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
      updateTimerValue(elapsedTime);
      console.log('isRunning: ' + !isRunning);
      // Update the activeTimer state here
      // For example:
      // setActiveTimer(false);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setElapsedTime(0);
  };

  const updateTimer = () => {
    setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
  };

  useEffect(() => {
    if (activeTimer) {
      startTimer();
      console.log('starting timer')
    } else {
      stopTimer();
      console.log('Stop Timer called')
    }
  }, [activeTimer]);

  useEffect(() => {
    console.log('TIMER USEEFFECT!! HIT !!! ')
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      if (timerReset === true) {
        console.log('timerReset is being hit!')
        // Reset the timer
        resetTimer();
        updateTimerReset(false); // Reset the flag
      }
    };
  }, [intervalId, timerReset]);

  const formatTime = (time: number): string => {
    const minutes: number = Math.floor(time / 60000);
    const seconds: number = Math.floor((time % 60000) / 1000);
    const centiseconds: number = Math.floor((time % 60000) / 10) % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='timer-display'>
      <div className='next-rider-timer'>
        Rider: {storedNames[nextRider]?.name}
        {/* You can display other information about the rider here */}
      </div>
      {/* <div><p>(timer)</p></div> */}
      <div className='timer-container'>
        <div id="timer"> {formatTime(elapsedTime)}</div>
        <div className='faults-display'>Faults: 4</div>
      </div>
      <div className='timer-buttons-container start-button'>
        <Button id='start-button' size='small' variant='contained'  onClick={isRunning ? stopTimer : startTimer}>
          {isRunning ? 'Stop' : 'Start'}
        </Button>
        <Button id='fault-button' size='small' variant='contained' color='error' onClick={resetTimer}>Fault</Button>
       
      </div>
      <div className='timer-buttons-container'>
    
      <Button size='small' variant='outlined' startIcon={<RestartAltIcon />} onClick={resetTimer}>RESET</Button>
      
       
        <Button size='small' variant='outlined' startIcon={<BackupIcon />} color='success' onClick={handleFinishedClick} disabled={activeTimer}>
          SUBMIT
        </Button>

    </div>
    </div>
  );
}

export default Timer;
