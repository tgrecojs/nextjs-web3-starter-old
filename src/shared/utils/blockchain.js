

const wallets = {
  BTC: '3GaTxzwfGZG5ExPU4rKptpfD86esxShMD1',
  ETH: '0x47231990481693C165E4242B665BB547d2b7e336'
};
const API = 'https://api.blockchair.com';
const defaultCurrencies = [
  'bitcoin',
  'bitcoin-cash',
  'ethereum',
  'litecoin',
  'bitcoin-sv',
  'monero',
  'dogecoin'
];

const hasHashValue = (key, val) =>
  val.hash ? null : Array.isArray(val) ? null : Object.keys(val)
    .length ? null : (
      <ChainDetails>
        <h3>{key}:</h3>
        <p>{val}</p>
      </ChainDetails>
    );
const toKeyValuePairs = (obj = {}) =>
  Object.entries(obj).map(([key, val]) => ({ key, val }));

const createUrl = (rootUrl = '') => (currency = '') => (dataType = '') =>
  `${rootUrl}/${currency}/${dataType}`;

const createBlockchainUrl = createUrl(API);
const head = ([first, ...rest] = array = []) => first;


const createWalletDetails = ({
  first_seen_receiving = '',
  first_seen_spending = '',
  last_seen_spending = '',
  last_seen_receiving = '',
  spent_usd = 0,
  transaction_count = 0,
  received_usd = 0
} = {}) => ({
  first_seen_receiving,
  first_seen_spending,
  last_seen_spending,
  last_seen_receiving,
  spent_usd,
  transaction_count,
  received_usd
});

export {
  wallets,
  createWalletDetails,
  API,
  defaultCurrencies,
  hasHashValue,
  toKeyValuePairs,
  createBlockchainUrl,
  head,
  createUrl
}
