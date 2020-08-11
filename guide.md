## import Fortmatic + Web3

- 1st we need fm & web3...

```js
import Fortmatic from 'fortmatic';
import Web3 from 'web3';
```

## write initializeWeb3 wrapper

- this is where we will be connecting to application to the ethereum blockchain.
- to do this i'll first setup fortmatic using my API key.... and from there, I can pass this in to the Web3 function and call `.getProvider`

### getProvider

- this is where you specify your network.
- in development, rinkeby is set by default,
  - but we can connect to ropsten & koven by just passing their names in as a string.
  - **stick with rinkeby for now!**
- The last thing i'll do is set the web3 as a global property to my window

```js
import Fortmatic from 'fortmatic';
import Web3 from 'web3';

const initializeWeb3 = () => {
  console.log('inside initiWeb3');
  const fm = new Fortmatic('pk_test_FD0EB9F0796F08AF');
  const web3 = new Web3(fm.getProvider());
};
```

```js
const initializeWeb3 = () => {
  console.log('inside initiWeb3');
  const fm = new Fortmatic('pk_test_FD0EB9F0796F08AF');
  const web3 = new Web3(fm.getProvider());
  window.web3 = web3;
  web3.eth.getAccounts().then(accounts => {
    console.log(accounts);
  });
};
```
