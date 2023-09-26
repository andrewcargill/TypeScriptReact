import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../AppState';

function DisplayRiders() {
  const { storedNames, updateStoredNames } = useAppContext();


  return (
    <div>
      <div>Riders List</div>
      <ul>
        {storedNames.map((name, index) => (
          <div key={index}>{index + 1}: {name}</div>
        ))}
      </ul>
    </div>
  );
}

export default DisplayRiders;
