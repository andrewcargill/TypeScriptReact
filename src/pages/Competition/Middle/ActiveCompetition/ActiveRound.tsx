import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../../AppState';

function ActiveRound() {
  const { storedNames } = useAppContext();

  // Filter the riders with finished = true
  const finishedRiders = storedNames.filter((rider) => rider.finished);

  // Sort the finished riders by their times in ascending order
  finishedRiders.sort((a, b) => a.time - b.time);

  const formatTime = (time: number): string => {
    const minutes: number = Math.floor(time / 60000);
    const seconds: number = Math.floor((time % 60000) / 1000);
    const centiseconds: number = Math.floor((time % 60000) / 10) % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>
        <div>
          <p>(activeRound)</p>
        </div>

        <div>
          <p>Results:</p>
          <table>
            <thead>
              <tr>
                <th>Rider Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {finishedRiders.map((rider, index) => (
                <tr key={index}>
                  <td>{rider.name}</td>
                  <td>{formatTime(rider.time)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ActiveRound;
