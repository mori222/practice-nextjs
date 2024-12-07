'use client'

import { createContext, useContext } from 'react';
import { useCounter } from '../hooks/useCounter';
import { useInputArray } from '../hooks/useInputArray';
import { useBgColor } from '../hooks/useBgColor';

const StateContext = createContext<{
  counterState: ReturnType<typeof useCounter>;
  inputArrayState: ReturnType<typeof useInputArray>;
} | null>(null);

export function StateProvider({ children }: { children: React.ReactNode }) {
    const counterState = useCounter();
    const inputArrayState = useInputArray();
    useBgColor();
  
    const value = {
      counterState,
      inputArrayState
    };
  
    return (
      <StateContext.Provider value={value}>
        {children}
      </StateContext.Provider>
    );
}

export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useAppState must be used within StateProvider');
  }
  return context;
};