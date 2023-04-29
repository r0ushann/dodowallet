import React from 'react';
import {Button, Card} from "antd";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {ethers} from 'ethers';


function CreateAccount ({setWallet, setSeedPhrase}) {

    const [newSeedPhrase, setNewSeedPhrase] = useState(null);
    const navigate = useNavigate();

    function generateWallet(){
        const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
        setNewSeedPhrase(mnemonic)
      }
    

      function setWalletAndMnemonic(){
        setSeedPhrase(newSeedPhrase);
        setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address)
      }

  return (
    <>
    <div className='content'>
        <div className='mnemonic'>
            <ExclamationCircleOutlined style={{fontSize:"30px"}}/>
            <div>
                Once you generate the seed phrase, save it securely for future access to your wallet.
            </div>      
        </div>
        <Button 
            className='frontPageButton'
            type="primary"
            onClick={() => generateWallet()} 
        >
            Generate Seed Phrase
        </Button>

        <Card className="seedPhraseContainer">
         {newSeedPhrase && <pre style={{whiteSpace: "pre-wrap"}}>{newSeedPhrase}</pre>}
        </Card>

       <Button
          className="frontPageButton"
          type="default"
          onClick={() => setWalletAndMnemonic()}
        >
           Go to your Wallet
        </Button>
        <p className="backHomeButton" style={{fontWeight:"600"}} onClick={() => navigate("/")}>
        Back Home
        </p>

    </div>
    </>
  )
}

export default CreateAccount