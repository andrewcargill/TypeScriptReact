import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AddRiders from './AddRiders';
import { Button } from '@mui/material';
import DisplayRiders from './DisplayRiders';

function CompetitorsList() {
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
    <div>
        <h5>Competitors Component</h5>
        {showAddRiders ? (

          <AddRiders />
        ) : (
          <DisplayRiders />
        )}
        <div>
          <Button onClick={handleStartClick}>START</Button>
        </div>
     
    </div>
  );
}

export default CompetitorsList;
