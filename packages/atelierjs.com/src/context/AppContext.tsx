import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { FCWithChildren } from '../types';

export type AppContextType = {
  navExpanded: boolean;
  openNav: () => void;
  closeNav: () => void;
  toggleNav: () => void;
};

const defaultContext: AppContextType = {
  navExpanded: false,
  openNav: () => {},
  closeNav: () => {},
  toggleNav: () => {},
};

const AppContext = createContext(defaultContext);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw Error('Attempted to use AppContext without a provider.');
  }
  return context;
};

export const AppContextProvider: FCWithChildren = ({ children }) => {
  const [navExpanded, setNavExpanded] = useState(false);

  const openNav = useCallback(() => setNavExpanded(true), []);
  const closeNav = useCallback(() => setNavExpanded(false), []);
  const toggleNav = useCallback(() => setNavExpanded((prev) => !prev), []);

  const value = useMemo(
    () => ({
      navExpanded,
      openNav,
      closeNav,
      toggleNav,
    }),
    [navExpanded, openNav, closeNav, toggleNav]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
