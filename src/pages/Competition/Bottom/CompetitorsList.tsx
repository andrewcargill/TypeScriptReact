import React from 'react';
import AddRiders from './AddRiders';
import { Alert, Button, Snackbar } from '@mui/material';
import DisplayRiders from './DisplayRiders';
import { useAppContext } from '../../../AppState';
import { useState } from 'react';

function CompetitorsList() {
    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '500px',
        margin: '0 auto',
        marginTop: '20px',
    };

    const { ridersReady, handleRidersReady, storedNames, updateStoredNames, isActive, updateNextRider } = useAppContext();

    const openAlert = () => {
        setIsAlertOpen(true);
    };

    const closeAlert = () => {
        setIsAlertOpen(false);
    };


    const handleButtonClick = () => {
        console.log('storedNames: ' + storedNames);

        if (storedNames.some(rider => typeof rider.name === 'string' && rider.name.trim() !== '')) {
            const updatedNames = [...storedNames];
            updateNextRider(0);

            handleRidersReady();
        } else {
            // Display a message or handle the case when storedNames is empty
            // alert('Please add at least one rider\'s name.');
            openAlert();
        }
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
                        ''
                    ) : (
                        <Button variant='contained' color='success' onClick={handleButtonClick}>
                            {ridersReady ? (
                                'Start competition'
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
