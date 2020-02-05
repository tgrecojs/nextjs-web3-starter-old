import React, { useEffect, useState } from 'react';
import { Card, Header } from '../../shared/styled';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';

const useFortmatic = (apiKey = '') => {
  const [accounts, setAccounts] = useState([]);
  const signIn = () => {
    const fm = new Fortmatic(apiKey);
    const web3 = new Web3(fm.getProvider());

    web3.eth.getAccounts().then(res => {
      return setAccounts(res);
    });
  };
  return {
    accounts,
    signIn
  };
};

const Wallet = () => {
  const { accounts, signIn } = useFortmatic('pk_test_FD0EB9F0796F08AF');
  useEffect(() => signIn(), []);
  return (
    <Card>
      <Header>Crypto Wallet</Header>
      <h3>Wallet Address: {accounts}</h3>
    </Card>
  );
};

export default Wallet;
