import React, { useContext, createContext, useEffect, useReducer } from "react";
import Web3Reducer, { initState } from "./reducer/Web3Reducer";

const Web3Context = createContext();

export function Web3Provider({ chirlden }) {
  const [state, dispatch] = useReducer(Web3Reducer, initState);

  return (
    <Web3Context.Provider value={[state, dispatch]}>
      {chirlden}
    </Web3Context.Provider>
  );
}

export function useWeb3Context() {
  return useContext(Web3Context);
}
