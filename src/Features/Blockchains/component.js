import { useState, useEffect } from 'react';
import 'isomorphic-unfetch';
import { fetchBlockchainInfo } from '../../shared/API/blockchain';
import { head, defaultCurrencies } from '../../shared/utils/blockchain';
import RenderWallet from '../RenderWallet/component';
import Item from '../ChainDataItem/component';

const BlockchainViewer = ({ currencies = defaultCurrencies }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(head(currencies));
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = event => {
    setSelectedCurrency(event.target.value);
  }
  useEffect(() => {
    fetchBlockchainInfo(selectedCurrency)
      .then(res => setData(res))
      .catch(err => setError(err));
  }, [selectedCurrency]);

  return (
    <div>
      <h1>Wallet Information</h1>
      <RenderWallet />
      <h2>Blockchain Viewer</h2>
      <label htmlFor="currency">
        Currency
        <select
          value={selectedCurrency}
          id="currency"
          name="currency"
          onChange={handleChange}
        >
          {currencies.map((x, i) => (
            <option key={i} value={x}>
              {x}
            </option>
          ))}
        </select>
      </label>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {data && data.length > 0 ? (
          <Item data={data} selectedCurrency={selectedCurrency} />
        ) : null}
      </div>
    </div>
  );
};

export default BlockchainViewer;
