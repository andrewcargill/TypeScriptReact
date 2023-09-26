import React, { useEffect, useState } from 'react';

function ResultsSection() {
    const [storedNames, setStoredNames] = useState<string[]>([]);
    const [isActive, setIsActive] = useState<boolean>(false);

    

    useEffect(() => {
        // Check local storage for the initial value
        const storedValue = localStorage.getItem('isActive');
        if (storedValue !== null) {
          setIsActive(storedValue === 'false');
        } else {
          // If no value in local storage, set isActive to false
          setIsActive(true);
        }
      }, []);
    
      const toggleActiveStatus = () => {
        const newValue = !isActive;
        localStorage.setItem('isActive', newValue.toString());
        setIsActive(newValue);
      };
   


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
            <div>
            <p>Competition Status: {isActive ? 'Active' : 'Inactive'}</p>
      <button onClick={toggleActiveStatus}>
        {isActive ? 'End Comp' : 'Start Comp'}
      </button>
            </div>
            <ul>
                {storedNames[0]}
            </ul>
        </div>
    );
}

export default ResultsSection;
