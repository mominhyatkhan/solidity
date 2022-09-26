import React from "react";
import "./App.css";
import { Employer } from "./components/Employer";
import { Freelacer } from "./components/Freelacer";
import { ProjectDetails } from "./components/ProjectDetails";
import Abi from "../src/utils/abi.json";

function App() {
  const { ethers } = require("ethers");
  const contract_address = "0x15C66706E61B97cAC0edFE435b64Bffa85d1B1D1";
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const Abi_ = Abi.abi;
  const project_details = new ethers.Contract(contract_address, Abi_, signer);

  const create_request = async (title, price) => {
    console.log(title, price);
    const result = await project_details.createRequest(title, price, {
      gasLimit: 100000,
    });
    console.log(result);
    await result.wait();
    return result;
  };
  // console.log(Abi_);

  provider.send("eth_requestAccounts", []);

  const main = async () => {
    //   console.log("hyee");
    //   await provider.send("eth_requestAccounts", []);
    //   console.log("Account Address", await signer.getAddress());

    const balance = await signer.getBalance();
    console.log(`${ethers.utils.formatEther(balance)} ETHHH`);
    // console.log("Account Address", await signer.getAddress());
    const bal = await project_details.show();
    console.log("address" + bal);
  };
  main();

  return (
    <div className="App">
      <header className="App-header">
        <Employer details={project_details} />
        <Freelacer details={project_details} create_request={create_request} />
        <ProjectDetails />
      </header>
    </div>
  );
}

export default App;
