import React, { useState, useContext } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AddRiders from '../components/AddRiders';
import { Button } from '@mui/material';
import DisplayRiders from '../components/DisplayRiders';
import CompetitorsList from '../components/CompetitorsList';
import Timer from '../components/TimerFunction';
import ResultsSection from '../components/ResultsSection';

function Competition() {

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '500px',
        margin: '0 auto',
        marginTop: '20px',
    };

    

    return (
        <Container style={containerStyle}>
            <Typography className='top-box' variant="h4"><Timer /> </Typography>
            <Typography className='middle-box' variant="h4"><ResultsSection /></Typography>
            <Typography className='bottom-box' variant="h4">
                <CompetitorsList />
            </Typography>
        </Container>
    );
}

export default Competition;
