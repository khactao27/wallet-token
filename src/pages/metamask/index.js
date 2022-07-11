import React, { useState, useEffect } from "react";

import { useWeb3Context } from "../../contexts/contexts/Web3Context";
import { web3Action } from "../../contexts/reducer/Web3Reducer";
import { CONNECT } from "../../contexts/reducer/Web3Reducer";


const MetaMask = () => {
    const [state, dispatch] = useWeb3Context();

  return (
    <div>
      <h1>Metamask</h1>
      <p>account: {state.account}</p>
      <p>Network: {state.network}</p>
      <p>Balance: {state.balance}</p>
{   !state.connect ? <button onClick={(event) => {
        dispatch(web3Action(CONNECT, { name: "TAO", age: 12 }))
    }}>Connect</button> : <div>Metamask connected</div>
}
    </div>
  );
};

export default MetaMask;
