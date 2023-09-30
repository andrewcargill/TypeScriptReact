import React, { useState, useContext } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CompetitorsList from './Bottom/CompetitorsList';
import MiddleMainContainer from './Middle/MiddleMainContainer';
import TopMainContainer from './Top/TopMainContainer';
import ActiveRound from './Middle/ActiveCompetition/ActiveRound';
import StopFaultButtons from './ButtonsStartStop/StopFaultButtons';

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
            <Typography m={2} className='top-box' variant="h4"><TopMainContainer /></Typography>
            <Typography m={2} variant="h4">
               <StopFaultButtons />
                </Typography>
            <Typography m={2} className='middle-box' variant="h4">
                <MiddleMainContainer />
                </Typography>
            <Typography className='bottom-box' variant="h4">
                <CompetitorsList />
            </Typography>
        </Container>
    );
}

export default Competition;
