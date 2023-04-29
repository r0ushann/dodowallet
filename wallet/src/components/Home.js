import React from 'react';
import {Button} from "antd";
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

    return (
    <>
    <div className='content'>
        {/* <h1>🦤</h1> */}
        <h2>Hey there!🐧</h2>
        <h3 className='h3'> Welcome to Dodo Web3 Wallet</h3>

            <Button 
            onClick={() => navigate("/yourwallet")}
            className='frontPageButton'
            type='primary'
            >Create New Wallet
            </Button>

            <Button 
            onClick={()=> navigate("/recover")}
            className='frontPageButton'
            type='default'
            >Sign In With Seed Phrase
            </Button>

            {/* <p>*use your seed Phrase for your account login if created an account before.*</p> */}
            <span></span>
    </div>
    </>
    )
}

export default Home