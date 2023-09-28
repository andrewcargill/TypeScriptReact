import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../AppState';

function Timer() {
  const { activeTimer } = useAppContext();

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
    if (isRunning && intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
      setIsRunning(false);
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
    } else {
      stopTimer();
    }
  }, [activeTimer]); // Add activeTimer as a dependency

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
      <div>Timer Function Module</div>
      <div id="timer">{formatTime(elapsedTime)}</div>
      <button onClick={isRunning ? stopTimer : startTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
