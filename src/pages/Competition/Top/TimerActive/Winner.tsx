import React from 'react';
import { useAppContext } from '../../../../AppState';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function Winner() {
  const { rankedRiders } = useAppContext();

  return (
    <div className='winners-container'>
      <div className='second-place-container winner-ranked-container'>
        <div className='winner-ranking-number'>2ND</div>
        <div>{rankedRiders[1]?.name && <div className='winner-name'>{rankedRiders[1].name}</div>}</div>
        <div className='winner-icon'><StarOutlineIcon sx={{ fontSize: 20 }} /></div>
      </div>

      <div className='first-place-container winner-ranked-container'>
        <div className='winner-ranking-number'>WINNER</div>
        <div>{rankedRiders[0]?.name && <div className='winner-name'>{rankedRiders[0].name}</div>}</div>
        <div className='winner-icon'><EmojiEventsIcon sx={{ fontSize: 40 }} /></div>
      </div>
      <div className='third-place-container winner-ranked-container'>
        <div className='winner-ranking-number'>3RD</div>
        <div>{rankedRiders[2]?.name && <div className='winner-name'>{rankedRiders[2].name}</div>}</div>
        <div className='winner-icon'><StarOutlineIcon sx={{ fontSize: 20 }} /></div>
      </div>
    </div>
  )
};


export default Winner;
