import React from 'react';
import { useAppContext } from '../../../../AppState';
import Timer from './Timer';
import Winner from './Winner';

function TimerActiveContainer() {
  const { storedNames, updateStoredNames, nextRider } = useAppContext();
  const { isActive, toggleActive } = useAppContext();

  return (
    <div>
        {nextRider === -1 ? (
        <Winner />
      ) : (
        <Timer />
      )}
    </div>
  );
}

export default TimerActiveContainer;
