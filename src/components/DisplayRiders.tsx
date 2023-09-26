import React, { useEffect, useState } from 'react';

function DisplayRiders() {
  const [storedNames, setStoredNames] = useState<string[]>([]);

  useEffect(() => {
    // Load stored names from local storage when the component mounts
    const storedNamesData = localStorage.getItem('names');
    if (storedNamesData) {
      const parsedNames = JSON.parse(storedNamesData);
      setStoredNames(parsedNames);
    }
  }, []);

  return (
    <div>
      <div>Riders List</div>
      <ul>
        {storedNames.map((name, index) => (
          <div key={index}>{index + 1}: {name}</div>
        ))}
      </ul>
    </div>
  );
}

export default DisplayRiders;
