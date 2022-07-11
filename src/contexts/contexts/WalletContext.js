import React, {
    useContext,
    createContext,
    useEffect,
    useReducer,
    useMemo,
  } from "react";
  
import WalletReducer, { initState } from "../reducer/WalletReducer";
  
const WalletContext = createContext();
  
export function WalletProvider({ children }) {
    const [state, dispatch] = useReducer(WalletReducer, initState);
  
    return (
      <WalletContext.Provider value={[state, dispatch]}>
        {children}
      </WalletContext.Provider>
    );
}

export function useWalletContext() {
    return useContext(WalletContext);
}
  