import { useState } from 'react';
import {Select} from "antd";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import RecoverAccount from './components/RecoverAccount';
import CreateAccount from './components/CreateAccount';
import WalletView from './components/WalletView';

function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");


  return (
    <div className="App">
      <header>
      <h1 className='wallet-title'>🦤
      <Select 
      onChange={(val) => setSelectedChain(val)}
      value={selectedChain}
      options={[
        {
          label: "Ethereum",
          value: "0x1",
        },
        {
          label: "Mumbai Testnet",
          value: "0x13881",
        },
        {
          label: "Polygon",
          value: "0x89",
        },
        {
          label: "Goerli",
          value: "0x5",
        },
      ]}

      className='dropdown'>
      </Select >

      </h1> 
      </header>
    {wallet && seedPhrase ? (
        <Routes>
          <Route
            path="/yourwallet"
            element={
              <WalletView
                wallet={wallet}
                setWallet={setWallet}
                seedPhrase={seedPhrase}
                setSeedPhrase={setSeedPhrase}
                selectedChain={selectedChain}
              />
            }
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recover"
            element={
              <RecoverAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
          <Route
            path="/yourwallet"
            element={
              <CreateAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
        </Routes>
      )}
     
    </div>
  );
}

export default App;