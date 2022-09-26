const { ethers } = require("ethers");

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
provider.send("eth_requestAccounts", []);

const main = async () => {
  //   console.log("hyee");
  //   await provider.send("eth_requestAccounts", []);
  //   console.log("Account Address", await signer.getAddress());

  const balance = await signer.getBalance(
    "0x4c8795CF4FE368B847AF45ba6b31739f664E7b49"
  );
  console.log(`${ethers.utils.formatEther(balance)} ETHHH`);
  console.log("Account Address", await signer.getAddress());
};

main();
