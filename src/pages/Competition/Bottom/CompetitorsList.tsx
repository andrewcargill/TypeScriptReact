import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
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

    const {ridersReady, handleRidersReady} = useAppContext();

    return (
        <div>
            <h5>Competitors Component</h5>
            {ridersReady ? (

                <AddRiders />
            ) : (
                <DisplayRiders />
            )}
            <div>
                <Button onClick={handleRidersReady}>
                    {ridersReady ? (

                        'start competition'
                    ) : (
                        'edit names'
                    )}

                </Button>
            </div>

        </div>
    );
}

export default CompetitorsList;
