import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../AppState';
import { Button, ThemeProvider } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import theme from '../../../../theme';
import RemoveIcon from '@mui/icons-material/Remove';

function Timer() {
  const { activeTimer, updateTimerValue, timerReset, updateTimerReset, timerValue, nextRider, storedNames, updateNextRider, updateStoredNames } = useAppContext();

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [faults, setFaults] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);


  const findNextRider = () => {
    // Find the index of the next rider
    return storedNames.findIndex((rider) => rider.finished === false);
  };

  const handleFaults = () => {
    setFaults((prevFaults) => prevFaults + 4);
  }
  const handleDeductFaults = () => {
    setFaults((prevFaults) => prevFaults - 4);
  }

  const handleFinishedClick = () => {
    if (nextRider >= 0 && nextRider < storedNames.length) {
      while (timerValue === null) {
        setTimeout(() => {
        }, 100);
      }
      const updatedNames = [...storedNames];
      updatedNames[nextRider].finished = true;
      updatedNames[nextRider].time = timerValue;
      updatedNames[nextRider].fault = faults;
      const nextUnfinishedRider = findNextRider();
      updateNextRider(nextUnfinishedRider);
      updateStoredNames(updatedNames);
      resetTimer();
      console.log(storedNames);
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
    if (isRunning && intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
      updateTimerValue(elapsedTime);
    }
  };

  const resetTimer = () => {
    stopTimer();
    setElapsedTime(0);
    setFaults(0);
  };

  const updateTimer = () => {
    setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
  };

  useEffect(() => {
    if (activeTimer) {
      startTimer();
    } else {
      stopTimer();
    }
  }, [activeTimer]);

  useEffect(() => {
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      if (timerReset === true) {
        resetTimer();
        updateTimerReset(false);
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
    <ThemeProvider theme={theme}>
      <div className='timer-display'>
        <div className='next-rider-timer'>
          Rider: {storedNames[nextRider]?.name}
        </div>

        <div className='timer-container'>
          <div id="timer"> {formatTime(elapsedTime)}</div>
          <div className='faults-display'>Faults: {faults}</div>
        </div>

        <div className='timer-buttons-container start-button'>
          <Button color='primary' id='start-button' size='small' variant='contained' onClick={isRunning ? stopTimer : startTimer}>
            {isRunning ? 'Stop' : 'Start'}
          </Button>
          <Button id='fault-button' size='small' variant='contained' color='error' onClick={handleFaults}>Fault</Button>
        </div>

        <div className='timer-buttons-container'>
          <Button size='small' variant='outlined' startIcon={<RestartAltIcon />} onClick={resetTimer}>RESET</Button>
          <Button id="submit-button" size='small' variant='outlined' startIcon={<BackupIcon />} color='success' onClick={handleFinishedClick} disabled={activeTimer}>
            SUBMIT
          </Button>
          <Button size='small' variant='outlined' startIcon={<RemoveIcon />} color='success' onClick={handleDeductFaults} disabled={activeTimer}>
            FAULT
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Timer;
