import React from 'react';
import { useAppContext } from '../../../AppState';
import { Button, Input, TextField } from '@mui/material';

interface Rider {
  name: string;
  time: number;
  finished: boolean;
}

function NameList() {
  const { storedNames, updateStoredNames } = useAppContext();

  const handleNameChange = (index: number, value: string) => {
    const updatedNames = [...storedNames];
    updatedNames[index].name = value;
    updateStoredNames(updatedNames);
  };

  const handleRemoveName = (index: number) => {
    const updatedNames = [...storedNames];
    updatedNames.splice(index, 1);
    updateStoredNames(updatedNames);
  };

  const handleAddName = () => {
    const updatedNames = [...storedNames, { name: '', time: 0, finished: false }];
    updateStoredNames(updatedNames);
  };

  return (
    <div>
      {/* <div>Add Riders</div> */}
      {storedNames.map((rider: Rider, index: number) => (
        <div key={index}>
          <TextField
            size='small'
            type="text"
            placeholder="Enter a name"
            value={rider.name}
            onChange={(e) => handleNameChange(index, e.target.value)}
          />
          {index > 0 && (
            <Button size='small' variant='contained' onClick={() => handleRemoveName(index)}>Remove</Button>
          )}
        </div>
      ))}
      <div>
        <Button size='small' variant='contained' onClick={handleAddName}>Add Name</Button>
      </div>
    </div>
  );
}

export default NameList;
