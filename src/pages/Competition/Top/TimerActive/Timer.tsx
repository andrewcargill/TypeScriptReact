import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../AppState';

function Timer() {
  const { activeTimer, updateTimerValue } = useAppContext();

  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

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
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const formatTime = (time: number): string => {
    const minutes: number = Math.floor(time / 60000);
    const seconds: number = Math.floor((time % 60000) / 1000);
    const centiseconds: number = Math.floor((time % 60000) / 10) % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div><p>(timer)</p></div>
      <div id="timer">{formatTime(elapsedTime)}</div>
      {/* <button onClick={isRunning ? stopTimer : startTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button> */}
    </div>
  );
}

export default Timer;
