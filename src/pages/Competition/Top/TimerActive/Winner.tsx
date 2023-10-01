import React from 'react';
import { useAppContext } from '../../../../AppState';
import Timer from './Timer';

function Winner() {
  const { rankedRiders } = useAppContext();

  return (
    <div className='winners-container'>
      <div className='third-place-container winner-ranked-contianer'>
        <div>3rd Place</div>
        <div>{rankedRiders[2].name}</div>
      </div>
      <div className='first-place-container winner-ranked-contianer'>
        <div>WINNER</div>
        <div>{rankedRiders[0].name}</div>
      </div>
      <div className='second-place-conainer winner-ranked-contianer'>
        <div>2nd Place</div>
        <div>{rankedRiders[1].name}</div>
      </div>
    </div>
  )
};


export default Winner;
