import React from 'react';
import { useAppContext } from '../../../../AppState';
import Timer from './Timer';

function TimerActiveContainer() {
  const { storedNames, updateStoredNames, nextRider } = useAppContext();
  const { isActive, toggleActive } = useAppContext();

  // const getNextRider = (): number => {
  //   return storedNames.findIndex((rider) => rider.next);
  // };

  // const nextRiderIndex = getNextRider();

  return (
    <div>
      <div>
        <div>
          {/* Display the next rider if it exists */}
         
           
   

          {/* Your component logic here... */}
        </div>
        {/* <div><p>(TimerActiveContainer)</p></div> */}

        <Timer />
      </div>
    </div>
  );
}

export default TimerActiveContainer;
