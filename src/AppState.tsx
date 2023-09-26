import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the global state
interface AppState {
  isActive: boolean;
  toggleActive: () => void;
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

  const toggleActive = () => {
    setIsActive((prevActive) => !prevActive);
  };

  const state: AppState = {
    isActive,
    toggleActive,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
