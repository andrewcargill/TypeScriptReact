import { useState } from 'react';
import React from 'react';
import { useAppContext } from '../../../AppState';
import ActiveRound from './ActiveCompetition/ActiveRound';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function MiddlePreStart() {
  const { storedNames, updateStoredNames, nextRider, updateNextRider } = useAppContext();
  const { isActive, toggleActive } = useAppContext();
  
  const handleToggleActiveAndToggleTimer = () => {
    toggleActive();
  }

  interface Rider {
    name: string;
    time: number;
    finished: boolean;
  }

  return (
    <div>
      <div>
        <div>
          {isActive ? <ActiveRound /> :
            <div className='title-container middle-welcome'>
              
                Get Ready to ride!
              
            </div>
          }</div>
        <div className='end-reset-comp-buttons-container'>
          {isActive ? (
          ''
          ):(
            <Button id='start-end-comp-button' variant="contained" color="secondary" onClick={handleToggleActiveAndToggleTimer}>
            {isActive ? 'End Competition' : 'Start Competition'}
          </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MiddlePreStart;
