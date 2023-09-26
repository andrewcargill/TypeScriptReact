import React, { useState, useEffect } from 'react';

interface NameListProps {
  names: string[];
  onNameChange: (index: number, value: string) => void;
  onRemoveName: (index: number) => void;
  onAddName: () => void;
  onStoreNames: (names: string[]) => void;
}

function NameList({
  names,
  onNameChange,
  onRemoveName,
  onAddName,
  onStoreNames,
}: NameListProps) {
  const handleStoreNames = () => {
    // Call the onStoreNames callback to store names in local storage
    onStoreNames(names);
  };

  return (
    <div>
      <h2>Add Riders</h2>
      {names.map((name, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Enter a name"
            value={name}
            onChange={(e) => onNameChange(index, e.target.value)}
          />
          {index > 0 && (
            <button onClick={() => onRemoveName(index)}>Remove</button>
          )}
        </div>
      ))}
      <button onClick={onAddName}>Add Name</button>
      <button onClick={handleStoreNames}>Store</button>
      <div>
        <h2>Rider List</h2>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  const [names, setNames] = useState<string[]>(['']);

  useEffect(() => {
    // Load names from local storage when the component mounts
    const storedNames = localStorage.getItem('names');
    if (storedNames) {
      setNames(JSON.parse(storedNames));
    }
  }, []);

  const handleNameChange = (index: number, value: string) => {
    const updatedNames = [...names];
    updatedNames[index] = value;
    setNames(updatedNames);
  };

  const handleRemoveName = (index: number) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
  };

  const handleAddName = () => {
    setNames([...names, '']);
  };

  const handleStoreNames = (namesToStore: string[]) => {
    // Store names in local storage
    localStorage.setItem('names', JSON.stringify(namesToStore));
  };

  return (
    <div>
      <NameList
        names={names}
        onNameChange={handleNameChange}
        onRemoveName={handleRemoveName}
        onAddName={handleAddName}
        onStoreNames={handleStoreNames}
      />
    </div>
  );
}
