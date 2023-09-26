import React from 'react';
import { useAppContext } from '../AppState';

function NameList() {
  const { storedNames, updateStoredNames } = useAppContext();

  const handleNameChange = (index: number, value: string) => {
    const updatedNames = [...storedNames];
    updatedNames[index] = value;
    updateStoredNames(updatedNames);
  };

  const handleRemoveName = (index: number) => {
    const updatedNames = [...storedNames];
    updatedNames.splice(index, 1);
    updateStoredNames(updatedNames);
  };

  const handleAddName = () => {
    const updatedNames = [...storedNames, ''];
    updateStoredNames(updatedNames);
  };

  return (
    <div>
      <div>Add Riders</div>
      {storedNames.map((name, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter a name"
            value={name}
            onChange={(e) => handleNameChange(index, e.target.value)}
          />
          {index > 0 && (
            <button onClick={() => handleRemoveName(index)}>Remove</button>
          )}
        </div>
      ))}
      <button onClick={handleAddName}>Add Name</button>
    
    </div>
  );
}

export default NameList;
