import { useEffect, useState } from "react";
import myTokenAbi from "./abi/myTokenAbi.json";
import { ethers } from "ethers";
import { toast } from "react-toastify";

import Navbar from "./Components/Navbar";
import ReadSmartContract from "./Components/ReadSmartContract";
import WriteSmartContract from "./Components/WriteSmartContract";
import GetBalance from "./Components/GetBalance";
import TransActions from "./Components/TransActions";

function App() {
  //-----------* states *-----------

  const [Address, setAddress] = useState(null);

  const [contractInfo, setContractInfo] = useState({
    address: "",
    tokenName: "",
    tokenSymbol: "",
    totalSupply: "",
  });
  const [contractAddress, setContractAddress] = useState(null);

  const [recipient, setRecipient] = useState(null);
  const [amount, setAmount] = useState(null);

  const [balanceInfo, setBalanceInfo] = useState({
    address: "",
    balance: "",
  });

  const [txs, setTxs] = useState([]);
  // const [contractListened, setContractListened] = useState();

  //-----------* functions *-----------

  // Connect MetaMask to Dapp

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      signer.getAddress().then((result) => {
        setAddress(result);
      });
      toast.success("Wallet connected successfully ");
    } else {
      toast.warn("!! Need to install Metamask !!");
    }
  };

  // Disconnect MetaMask to Dapp

  const disconnectWallet = () => {
    setAddress(null);
    toast.success("Wallet disconnected successfully ");
  };

  // Handle submit button for "read from contract" section

  const handleSubmit = async (e) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const smartContract = new ethers.Contract(
      contractAddress,
      myTokenAbi,
      provider
    );

    const tokenName = await smartContract.name();
    const tokenSymbol = await smartContract.symbol();
    const totalSupply = await smartContract.totalSupply();

    setContractInfo({
      address: contractAddress,
      tokenName,
      tokenSymbol,
      totalSupply,
    });
  };

  const changeHandler = (e) => {
    setContractAddress(e.target.value);
  };

  //Handling transfer tokens in dapp (Write)

  const handleTransfer = async (e) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const contractAddress = "0x948FBe515fC4758dd1683e7e6D1ae7f85eE843D1";
    const smartContract = new ethers.Contract(
      contractAddress,
      myTokenAbi,
      signer
    );
    await smartContract.transfer(recipient, amount);
    toast.success("Amount was sent successfully");
  };

  const recipientHandler = (e) => {
    setRecipient(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  // Getting user ballance

  const getMyBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const contractAddress = "0x948FBe515fC4758dd1683e7e6D1ae7f85eE843D1";
    const smartContract = new ethers.Contract(
      contractAddress,
      myTokenAbi,
      provider
    );
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const balance = await smartContract.balanceOf(signerAddress);

    setBalanceInfo({
      address: signerAddress,
      balance: String(balance),
    });
  };

  //useEffect for listening to events in smart contract and return them in TxList component

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contractAddress = "0x948FBe515fC4758dd1683e7e6D1ae7f85eE843D1";
    const smartContract = new ethers.Contract(
      contractAddress,
      myTokenAbi,
      provider
    );

    smartContract.on("Transfer", (from, to, amount, event) => {
      console.log({ from, to, amount, event });

      setTxs([
        ...txs,
        {
          txHash: event.transactionHash,
          from,
          to,
          amount: String(amount),
        },
      ]);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        Address={Address}
        setAddress={setAddress}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 mt-11">
        <div className="container">
          <ReadSmartContract
            handleSubmit={handleSubmit}
            contractInfo={contractInfo}
            setContractInfo={setContractInfo}
            changeHandler={changeHandler}
          />
          <WriteSmartContract
            handleTransfer={handleTransfer}
            recipientHandler={recipientHandler}
            amountHandler={amountHandler}
          />
        </div>

        <div className="container">
          <GetBalance
            getMyBalance={getMyBalance}
            balanceInfo={balanceInfo}
            setBalanceInfo={setBalanceInfo}
          />
          <TransActions txs={txs} setTxs={setTxs} />
        </div>
      </div>
    </div>
  );
}

export default App;
