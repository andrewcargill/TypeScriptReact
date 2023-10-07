import React from 'react';
import AddRiders from './AddRiders';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import DisplayRiders from './DisplayRiders';
import { useAppContext } from '../../../AppState';
import { useState } from 'react';

function CompetitorsList() {
    const [open, setOpen] = useState(false);
    const [clearAllOpen, setClearAllOpen] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '500px',
        margin: '0 auto',
        marginTop: '20px',
    };

    const { ridersReady, toggleActive, handleRidersReady, storedNames, updateStoredNames, isActive, updateNextRider } = useAppContext();

    const openAlert = () => {
        setIsAlertOpen(true);
    };

    const closeAlert = () => {
        setIsAlertOpen(false);
    };
    

    const handleButtonClick = () => {
        if (storedNames.some(rider => typeof rider.name === 'string' && rider.name.trim() !== '')) {
            const updatedNames = [...storedNames];
            updateNextRider(0);
            handleRidersReady();
        } else {
            openAlert();
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const handleClearAllClickOpen = () => {
        setClearAllOpen(true);
      };
    
      const handleClearAllClickClose = () => {
        setClearAllOpen(false);
      };

    const handleResetConfirmed = () => {
        // Create a new array with rider names only
        const riderNames = storedNames.map((rider) => ({ name: rider.name, time: 0, fault: 0, finished: false }));
        updateNextRider(0);
        updateStoredNames(riderNames);
        setOpen(false);
      };

    const handleResetAllData = () => {
        // Create a new array with rider names only
        updateNextRider(0);
        updateStoredNames([]);
        toggleActive();
        handleRidersReady();
        setClearAllOpen(false);
      };

    return (
        <div>

            <Snackbar
                open={isAlertOpen}
                autoHideDuration={3000}
                onClose={closeAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="warning" onClose={closeAlert}>
                    Please add at least one rider's name.
                </Alert>
            </Snackbar>

            {/* <h5>Competitors Component</h5> */}
            {ridersReady ? (
                <AddRiders />
            ) : (
                <DisplayRiders />
            )}
            <div>
                <div className='title-container'>
                    {isActive ? (
                        <div>
                        <div>
                               {/* RESET BUTTON MODULE */}
                        <Button id='rest-comp-button' variant="contained" color="secondary" onClick={handleClickOpen}>
                          Reset Competition
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>Confirm Reset</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              This will KEEP ALL RIDERS NAMES but delete the saved times.
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
                        <div>
                               {/* RESET BUTTON MODULE */}
                        <Button id='rest-comp-button' variant="contained" color="secondary" onClick={handleClearAllClickOpen}>
                          Clear All Data
                        </Button>
                        <Dialog open={clearAllOpen} onClose={handleClearAllClickClose}>
                          <DialogTitle>Confirm Reset</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                             This will DELETE ALL RIDERS NAMES AND TIMES so that you can start a new competition.
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClearAllClickClose} color="secondary">
                              Cancel
                            </Button>
                            <Button onClick={handleResetAllData} variant="contained" color="secondary">
                              Reset
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                      </div>
                    ) : (
                        <Button variant='contained' color='success' onClick={handleButtonClick}>
                            {ridersReady ? (
                                'Save'
                            ) : (
                                'Edit names'
                            )}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CompetitorsList;
