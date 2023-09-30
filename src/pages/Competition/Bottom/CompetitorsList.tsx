import React from 'react';
import AddRiders from './AddRiders';
import { Button } from '@mui/material';
import DisplayRiders from './DisplayRiders';
import { useAppContext } from '../../../AppState';

function CompetitorsList() {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '500px',
        margin: '0 auto',
        marginTop: '20px',
    };

    const { ridersReady, handleRidersReady, storedNames, updateStoredNames, isActive, updateNextRider } = useAppContext();

    const handleButtonClick = () => {
        console.log('storedNames: ' + storedNames);

        if (storedNames.some(rider => typeof rider.name === 'string' && rider.name.trim() !== '')) {
            const updatedNames = [...storedNames];
            updateNextRider(0);
            
            handleRidersReady();
        } else {
            // Display a message or handle the case when storedNames is empty
            alert('Please add at least one rider\'s name.');
        }
    };

    return (
        <div>
            {/* <h5>Competitors Component</h5> */}
            {ridersReady ? (
                <AddRiders />
            ) : (
                <DisplayRiders />
            )}
            <div>
                {isActive ? (
                    ''
                ):(
                    <Button onClick={handleButtonClick}>
                    {ridersReady ? (
                        'Start competition'
                    ) : (
                        'Edit names'
                    )}
                </Button>
                )}

                
            </div>
        </div>
    );
}

export default CompetitorsList;
