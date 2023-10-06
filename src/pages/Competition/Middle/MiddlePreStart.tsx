import { useState } from 'react';
import React from 'react';
import { useAppContext } from '../../../AppState';
import ActiveRound from './ActiveCompetition/ActiveRound';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function MiddlePreStart() {
  const [open, setOpen] = useState(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResetConfirmed = () => {
    // Create a new array with rider names only
    const riderNames = storedNames.map((rider) => ({ name: rider.name, time: 0, fault: 0, finished: false }));
    updateNextRider(0);
    updateStoredNames(riderNames);
    setOpen(false);
  };

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
          <Button variant="contained" color="secondary" onClick={handleToggleActiveAndToggleTimer}>
            {isActive ? 'End Competition' : 'Start Competition'}
          </Button>
          <div>
            <Button variant="contained" color="secondary" onClick={handleClickOpen}>
              Reset Competition
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Confirm Reset</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Do you want to reset all riders' data and start again?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button onClick={handleResetConfirmed} variant="contained" color="secondary">
                  Reset
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddlePreStart;
