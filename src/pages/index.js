import React, { useState } from "react";
import { Button } from "antd";
import Metamask from "./metamask/index"
import { Web3Provider } from "../contexts/contexts/Web3Context";
import { WalletProvider } from "../contexts/contexts/WalletContext";
import Wallet from "./wallet/index";

const App = () => {
  return (
    <div style={{ margin: "0 25% 0 25%" }}>
    <Web3Provider>
    <Metamask/>
    </Web3Provider>
{ true ?   <WalletProvider>
    <Wallet/>
    </WalletProvider> : <h1> AAAA</h1>}
    </div>
  );
};

export default App;
