import { createContext, useContext } from 'react';
import api from './api';

const AppContext = createContext(null);

export function AppWrapper({ children }) {
    let sharedState = {
    isAuthenticated: isAuthenticated()
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    let token = localStorage.getItem('token');
    if (token === null) {
      return false
    } else {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      return true;
    }
  }
  return false;
}

export const removeAuthentication = () => {
  if (typeof window !== 'undefined') {
    const ctx = useContext(AppContext)
    ctx.isAuthenticated = false;
  }
}