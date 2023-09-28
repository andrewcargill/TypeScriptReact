import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the Rider object
interface Rider {
  name: string;
  time: string;
  next: boolean;
  finished: boolean;
}

// Define the shape of the global state
interface AppState {
  activeTimer: boolean;
  isActive: boolean;
  ridersReady: boolean;
  toggleActive: () => void;
  toggleTimer: () => void;
  handleRidersReady: () => void;
  storedNames: Rider[]; 
  updateStoredNames: (names: Rider[]) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [storedNames, setStoredNames] = useState<Rider[]>([]);
  const [ridersReady, setRidersReady] = useState<boolean>(true);
  const [activeTimer, setActiveTimer] = useState<boolean>(false);
  console.log('state of isActive:' + isActive)
  console.log('activeTimer: ' + activeTimer);

  const handleRidersReady = () => {
    setRidersReady(!ridersReady);
    console.log('riders ready: ' + ridersReady);
  };
  const toggleTimer = () => {
    setActiveTimer((prevActive) => !prevActive);
  };
  const toggleActive = () => {
    setIsActive((prevActive) => !prevActive);
  };

  const updateStoredNames = (names: Rider[]) => {
    setStoredNames(names);
    console.log(storedNames);
  };

  const state: AppState = {
    isActive,
    toggleActive,
    storedNames,
    updateStoredNames,
    handleRidersReady,
    toggleTimer,
    ridersReady,
    activeTimer,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
