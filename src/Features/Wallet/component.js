import React, { useEffect, useState } from 'react';
import { Card, Header } from '../../shared/styled';
import Form from '../Form/component';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';

const useFortmatic = (apiKey = '') => {
  const [accounts, setAccounts] = useState([]);
  const signIn = () => {
    const fm = new Fortmatic(apiKey);
    const web3 = new Web3(fm.getProvider());
    window.web3 = web3;

    web3.eth.getAccounts().then(res => {
      return setAccounts(res);
    });
  };

  const sendTokens = ({ to = '', amount = 1 }) => {
    const web3 = window.web3;
    const value = web3.utils.toWei(amount, 'ether');
    const payload = {
      to,
      from: accounts[0],
      value
    };
    web3.eth.sendTransaction(payload, (error, transactionHash) => {
      if (error) return new Error('Issue sending Transaction');
      console.log(transactionHash);
      return transactionHash;
    });
  };

  return {
    accounts,
    sendTokens,
    signIn
  };
};

const Wallet = () => {
  const { accounts, signIn, sendTokens } = useFortmatic(
    'pk_test_FD0EB9F0796F08AF'
  );
  useEffect(() => signIn(), []);
  return (
    <Card>
      <Header>Crypto Wallet</Header>
      <p>
        <b>Wallet Address: {accounts}</b>
      </p>
      <Form sendTransaction={sendTokens} />
    </Card>
  );
};

export default Wallet;
