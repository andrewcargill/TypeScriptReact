import React from 'react';
import { useAppContext } from '../../../AppState';

function DisplayRiders() {
  const { storedNames } = useAppContext();

  const unfinishedRiders = storedNames.filter((rider) => !rider.finished);

  return (
    <div>
      <div>Riders List</div>
      <ul>
        {unfinishedRiders.map((rider, index) => (
          <div
            key={index}
            style={{ fontWeight: rider.next ? 'bold' : 'normal' }}
          >
            {index + 1}: {rider.name}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default DisplayRiders;
