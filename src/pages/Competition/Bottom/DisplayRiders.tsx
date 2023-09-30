import React from 'react';
import { useAppContext } from '../../../AppState';

function DisplayRiders() {
  const { storedNames, nextRider } = useAppContext();

  const unfinishedRiders = storedNames.filter((rider) => !rider.finished);

  return (
    <div>
      <div>Riders List</div>
      <ul>
        {storedNames.map((rider, index) => (
          <div
            key={index}
            style={{
              fontWeight: index === nextRider ? 'bold' : 'normal',
              color: rider.finished ? 'pink' : 'inherit',
            }}
          >
           <p> {index + 1}: {rider.name} </p>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default DisplayRiders;
