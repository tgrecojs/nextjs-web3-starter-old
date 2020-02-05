import React, { useEffect } from 'react';
import { Card, Header } from '../../shared/styled';
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

const Wallet = () => {
  useEffect(initializeWallet, []);
  return (
    <Card>
      <Header>Crypto Wallet</Header>
    </Card>
  );
};

export default Wallet;
