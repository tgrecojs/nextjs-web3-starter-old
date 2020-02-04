import { useState, useRef, useEffect } from 'react';
import Fortmatic from 'fortmatic';
import Web3 from 'web3';

const usePromise = () => {
  const ref = [];
  const container = useRef(ref);
  ref[0] = new Promise((resolve, reject) => {
    ref[1] = resolve;
    ref[2] = reject;
  });
  return container.current;
};

const useFortmaticWallet = () => {
  const [accounts, setAccounts] = useState(null);
  const [web3Ref, setWeb3Ref] = usePromise();
  const [web3RefInitialized, setWeb3RefInitialized] = useState(false);

  const signIn = async () => {
    const { web3 } = await web3Ref;
    web3.eth
      .getAccounts()
      .then(currentAccounts => {
        if (currentAccounts[0] !== accounts[0]) setAccounts(currentAccounts);
      })
      .catch(err => {
        console.log('Error::', err);
        setAccounts([]);
      });
  };

  const fm = new Fortmatic('pk_test_FD0EB9F0796F08AF');
  const web3 = new Web3(fm.getProvider());
};
