import React from 'react';
import AddRiders from './AddRiders';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Tooltip } from '@mui/material';
import DisplayRiders from './DisplayRiders';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
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
        toggleActive();
        setOpen(false);
    };

    const handleResetAllData = () => {
        updateNextRider(0);
        updateStoredNames([]);
        toggleActive();
        handleRidersReady();
        setClearAllOpen(false);
    };

    return (
        <div className='bottom-container'>

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

            {ridersReady ? (
                <AddRiders />
            ) : (
                <DisplayRiders />
            )}
            <div>
                <div className='title-container'>
                    {isActive ? (
                        <div className='reset-restart-buttons-container'>
                            <div className='reset-button-container'>
                                {/* RESET BUTTON MODULE */}
                                <Tooltip title="Reset Competition" placement="top">
                                <Button id='reset-comp-button' size="small" variant="outlined" color="secondary" onClick={handleClickOpen}>
                                    <RestartAltIcon />
                                </Button>
                                </Tooltip>
                                <Dialog open={open} onClose={handleClose}>
                                    <DialogTitle>Confirm Reset</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Will you run the same competition? This will KEEP ALL RIDERS NAMES but delete all saved times.
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
                            <div className='delete-button-container'>
                                {/* DELETE BUTTON MODULE */}
                                <Tooltip title="Delete All Riders" placement="top">
                                <Button id='delete-comp-button' variant="outlined" color="secondary" onClick={handleClearAllClickOpen}>
                                    <DeleteForeverIcon />
                                </Button>
                                </Tooltip>
                                <Dialog open={clearAllOpen} onClose={handleClearAllClickClose}>
                                    <DialogTitle>Confirm Reset</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Will you start a new competition?
                                            This will DELETE ALL RIDERS NAMES AND SAVED TIMES.
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
