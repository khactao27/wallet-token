import React, {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useMemo,
} from "react";

import Web3Reducer, { initState } from "../reducer/Web3Reducer";

const Web3Context = createContext();

export function Web3Provider({ children }) {
  const [state, dispatch] = useReducer(Web3Reducer, initState);

  return (
    <Web3Context.Provider value={[state, dispatch]}>
      {children}
    </Web3Context.Provider>
  );
}

export function useWeb3Context() {
  return useContext(Web3Context);
}
