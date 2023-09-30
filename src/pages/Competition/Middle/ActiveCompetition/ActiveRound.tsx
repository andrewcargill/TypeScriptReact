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

  const formatTimeDiff = (time: number): string => {
    const minutes: number = Math.floor(time / 60000);
    const seconds: number = Math.floor((time % 60000) / 1000);
    const centiseconds: number = Math.floor((time % 60000) / 10) % 100;
    return `${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>
        {/* <div>
          <p>(activeRound)</p>
        </div> */}

        <div>

          <div className='results-table-container'>
            <div className='title'> <div>Results </div></div>
            <table>
              <thead>
                <tr>
                  <th><p> Placing</p></th>
                  <th><p> Rider</p></th>
                  <th><p>Time</p></th>
                  <th><p>Diff</p></th> {/* Add a new column for the time difference */}
                </tr>
              </thead>
              <tbody>
                {finishedRiders.map((rider, index) => (
                  <tr key={index}>
                    <td><p>{index + 1}</p></td>
                    <td><p>{rider.name}</p></td>
                    <td><p><strong> {formatTime(rider.time)}</strong></p></td>
                    <td><p>
                      {/* Calculate and display the time difference */}
                      ({index === 0 ? '0' : `+${formatTimeDiff(rider.time - finishedRiders[0].time)}`})
                    </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveRound;
