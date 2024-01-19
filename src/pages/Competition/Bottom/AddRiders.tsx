import React from 'react';
import { useAppContext } from '../../../AppState';
import { Button, TextField } from '@mui/material';

interface Rider {
  name: string;
  time: number;
  finished: boolean;
  fault: number;
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
    const updatedNames = [...storedNames, { name: '', time: 0, finished: false, fault: 0 }];
    updateStoredNames(updatedNames);
  };

  return (
    <div className='add-riders-container'>
      <div className="rider-input-container">
          {storedNames.map((rider: Rider, index: number) => (
            <div key={index} className='rider-input-inner-container'>
              <TextField
                size='small'
                type="text"
                placeholder="Enter name"
                color='secondary'
                value={rider.name}
                className='rider-input-field'
                inputProps={{min: 0, style: { textAlign: 'center' }}}
                onChange={(e) => handleNameChange(index, e.target.value)}
              />
              {index > 0 && (
                <Button size='small' variant='contained' color='secondary' onClick={() => handleRemoveName(index)}>x</Button>
              )}
            </div>
          ))}
      </div>
      <div>
        <Button size='small' variant='contained' color='secondary' onClick={handleAddName}>Add Rider</Button>
      </div>
    </div>
  );
}

export default NameList;
