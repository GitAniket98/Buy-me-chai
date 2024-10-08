import abi from "./contract/chai.json";
import { useState, useEffect } from "react";
import { Contract, ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";

import "./App.css";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x79Af653aABDDC65a817e6d16810f4F3F6297b36f";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setState({
            ...state,
            provider,
            signer,
            contract,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    connectWallet();
  }, []);
  // console.log(state);
  return (
    <div className="App">
      <Buy state={state}></Buy>
      <Memos state={state}></Memos>
    </div>
  );
}

export default App;

//0x79Af653aABDDC65a817e6d16810f4F3F6297b36f
