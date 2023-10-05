import React, { useEffect } from 'react';
import { useAppContext } from '../../../../AppState';

function ActiveRound() {
  
  const { storedNames, updateRankedRiders, rankedRiders } = useAppContext();

  const formatTime = (time: number): string => {
    const minutes: number = Math.floor(time / 60000);
    const seconds: number = Math.floor((time % 60000) / 1000);
    const centiseconds: number = Math.floor((time % 60000) / 10) % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
  };

  const formatTimeDiff = (time: number): string => {
    const seconds: number = Math.floor((time % 60000) / 1000);
    const centiseconds: number = Math.floor((time % 60000) / 10) % 100;
    return `${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const finishedRiders = storedNames.filter((rider) => rider.finished); 
    const finishedRidersNoFaults = finishedRiders.filter((rider => rider.fault === 0));
    const finishedRidersWithFaults = finishedRiders.filter((rider) => rider.fault > 0);
    finishedRidersNoFaults.sort((a, b) => a.time - b.time);
    finishedRidersWithFaults.sort((a, b) => {
      if (a.fault === b.fault) {
        return a.time - b.time;
      }
      return a.fault - b.fault;
    });
    updateRankedRiders([...finishedRidersNoFaults, ...finishedRidersWithFaults]);
  }, [storedNames]);


  return (
    <div>
      <div>
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
                {rankedRiders.map((rider, index) => (
                  <tr key={index}>
                    <td><p>{index + 1}</p></td>
                    <td><p>{rider.name}</p></td>
                    <td><p><strong> {formatTime(rider.time)} ({rider.fault})</strong></p></td>
                    <td><p>
                      {/* Calculate and display the time difference */}
                      ({index === 0 ? '0' : `+${formatTimeDiff(rider.time - rankedRiders[0].time)}`})
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
