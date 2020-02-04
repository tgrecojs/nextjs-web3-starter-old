import React, { useEffect, useState } from 'react';
import { Card, Header, Button } from '../../shared/styled';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';

const initializeWallet = () => {
  const fm = new Fortmatic('pk_test_FD0EB9F0796F08AF');
  const web3 = new Web3(fm.getProvider());
  window.web3 = web3;
  web3.eth.getAccounts().then(res => {
    console.log(res);
    return res;
  });
};

const Wallet = ({ sendFn }) => {
  useEffect(initializeWallet, []);

  const [values, setValues] = useState({
    amount: 0,
    toAddress: ''
  });

  const set = prop => e => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const sendTransaction = () => {
    window.web3.eth.sendTransaction((err, data) => {
      if (err) throw Error();
      console.log('trans SeNT ####', data);
    });
  };

  return (
    <Card>
      <Header>Crypto Wallet</Header>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log('submitting form!', window.web3);
          sendTransaction();
        }}
      >
        <label>Recipient's Address:</label>
        <input type="number" onChange={set('amount')} />
        <Button type="submit">Send Eth</Button>
      </form>
    </Card>
  );
};

export default Wallet;
