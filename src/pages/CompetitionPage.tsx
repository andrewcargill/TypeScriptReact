import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AddRiders from '../components/AddRiders';
import { Button } from '@mui/material';
import DisplayRiders from '../components/DisplayRiders';
import CompetitorsList from '../components/CompetitorsList';
import Timer from '../components/TimerFunction';

function Competition() {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '500px',
    margin: '0 auto',
    marginTop: '20px',
  };

  const [showAddRiders, setShowAddRiders] = useState(true);

  const handleStartClick = () => {
    setShowAddRiders(false);
  };

  return (
    <Container style={containerStyle}>
      <Typography variant="h4"><Timer /> </Typography>
      <Typography variant="h4">2</Typography>
      <Typography variant="h4">
      <CompetitorsList />
      </Typography>
    </Container>
  );
}

export default Competition;
