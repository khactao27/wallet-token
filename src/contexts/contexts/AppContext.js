import React, {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useMemo,
} from "react";

import AppReducer, { initState } from "./reducer/AppReducer";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
