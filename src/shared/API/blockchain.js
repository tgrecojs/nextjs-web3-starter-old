import 'isomorphic-unfetch';
import {
  createBlockchainUrl,
  createWalletDetails,
  toKeyValuePairs,
  defaultCurrencies,
  wallets,
  head,
  API
} from '../utils/blockchain';

const fetchBlockchainInfo = (currency = head(defaultCurrencies)) =>
  fetch(createBlockchainUrl(currency)('stats'))
    .then(res => res.json())
    .then(res => toKeyValuePairs(res.data))
    .catch(err => {
      console.log('Error::', err);
      return err;
    });

const fetchWalletInfo = (currency = defaultCurrencies[2]) => (
  address = wallets.ETH
) =>
  fetch(
    createBlockchainUrl(currency)(
      `dashboards/address/${address}?transactions=true`
    )
  )
    .then(res => res.json())
    .then(json => {
      const getWalletInfoResponse = json.data;
      return getWalletInfoResponse;
    })
    .then(data => {
      const [firstWal] = Object.values(data);
      return firstWal.address;
    })
    .then(res => createWalletDetails(res))
    .catch(err => {
      console.log('err ## inside getWalletInfo ', err);
      return err;
    });

export { fetchBlockchainInfo, fetchWalletInfo };
