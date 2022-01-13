import React, { useState, useEffect } from 'react' // nạp thư viện react
import './App.css';
import Web3 from 'web3'

const web3 = new Web3(Web3.givenProvider)
function App() {

  const [add, setAdd] = useState();

  useEffect(async () => {
    await web3.eth.getAccounts().then(async address => {
      console.log(address);
      await web3.eth.getBalance(address[0]).then(async bal =>{
        console.log(bal);
      })
    });

  }, [])
  return (
    <div >
      hello
    </div>
  );
}

export default App;
